import { includeIgnoreFile } from '@eslint/compat'
import type { Linter } from 'eslint'
import { resolve } from 'node:path'

export const setup = (dirname: string): Linter.Config[] => {
  return [
    {
      name: 'axiom/setup/ignore-files',
      // TODO: ESLint doesn't yet support .ts config files.
      // When 'ignores' is the only key in a config object, the patterns are treated as global ignores.
      ignores: [...(includeIgnoreFile(resolve(dirname, '.gitignore'))?.ignores ?? []), 'eslint.config.mjs']
    },

    {
      name: 'axiom/setup/language-options',
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: resolve(import.meta.dirname, '..')
        }
      }
    },
    {
      name: 'axiom/setup/file-extension',
      files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}']
    }
  ]
}
