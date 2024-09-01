import { includeIgnoreFile } from '@eslint/compat'
import type { Linter } from 'eslint'
import { resolve } from 'node:path'

export const setup = (dirname: string): Linter.Config[] => {
  return [
    {
      name: '2bad/setup/ignore-files',
      // TODO: ESLint doesn't yet support .ts config files.
      // When 'ignores' is the only key in a config object, the patterns are treated as global ignores.
      ignores: [...(includeIgnoreFile(resolve(dirname, '.gitignore'))?.ignores ?? []), 'eslint.config.mjs']
    },
    {
      name: '2bad/setup/linter-options',
      linterOptions: {
        reportUnusedDisableDirectives: 'error'
      }
    },
    {
      name: '2bad/setup/language-options',
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname
        }
      }
    },
    {
      name: '2bad/setup/file-extension',
      files: ['**/*.ts', '**/*.cts', '**.*.mts']
    }
  ]
}
