import { includeIgnoreFile } from '@eslint/compat'
import type { Linter } from 'eslint'
import { resolve } from 'node:path'

export const setup = (dirname: string): Linter.FlatConfig[] => {
  return [
    includeIgnoreFile(resolve(dirname, '.gitignore')),
    {
      name: '2bad/setup/linter-options',
      linterOptions: {
        reportUnusedDisableDirectives: 'error'
      }
    },
    {
      name: '2bad/setup/file-extension',
      files: ['**/*.ts', '**/*.cts', '**.*.mts']
    }
  ]
}

export default setup
