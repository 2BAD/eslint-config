import { includeIgnoreFile } from '@eslint/compat'
import type { Linter } from 'eslint'
import { resolve } from 'node:path'
import axiomRules from './configs/axiom.ts'
import strict from './configs/strict.ts'
import stylistic from './configs/stylistic.ts'
import * as plugins from './plugins/index.ts'

/**
 * Generates an array of ESLint configuration objects for the Axiom setup.
 *
 * @param path - The directory path to use as a base for resolving configurations.
 * @returns An array of ESLint configuration objects.
 *
 * @description
 * This function creates an array of ESLint configuration objects that set up the Axiom
 * environment. It includes configurations for:
 * 1. Ignoring files based on .gitignore and adding 'eslint.config.mjs' to ignored files.
 * 2. Setting up language options with TypeScript project service.
 * 3. Specifying file extensions to be linted.
 * 4. Including all plugin configurations.
 *
 * @example
 * export default axiom(import.meta.dirname);
 */
export const axiom = (path: string): Linter.Config[] => {
  return [
    {
      name: 'axiom/setup/ignore-files',
      // TODO: ESLint doesn't yet support .ts config files.
      // When 'ignores' is the only key in a config object, the patterns are treated as global ignores.
      ignores: [...(includeIgnoreFile(resolve(path, '.gitignore'))?.ignores ?? []), 'eslint.config.mjs']
    },
    {
      name: 'axiom/setup/language-options',
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: path
        }
      }
    },
    {
      name: 'axiom/setup/file-extension',
      files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}']
    },
    strict,
    ...Object.values(plugins),
    stylistic,
    axiomRules
  ].flat()
}
