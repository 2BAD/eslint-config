import { includeIgnoreFile } from '@eslint/compat'
import type { Linter } from 'eslint'
import { resolve } from 'node:path'

export const setup = (dirname: string): Linter.Config[] => {
  return [
    {
      name: '2bad/setup/ignore-files',
      // TODO: remove this when eslint will support .ts configs
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
