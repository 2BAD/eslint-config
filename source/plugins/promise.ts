import type { Linter } from 'eslint'
// @ts-expect-error this plugin doesn't provide types
import plugin from 'eslint-plugin-promise'

export const config: Linter.Config[] = [
  {
    ...plugin.configs['flat/recommended'],
    name: 'eslint/plugin/promise/recommended'
  },
  {
    name: 'axiom/plugin/promise/overrides',
    rules: {
      'promise/prefer-await-to-callbacks': 'error',
      'promise/prefer-await-to-then': ['error', { strict: true }]
    }
  }
]

export default config
