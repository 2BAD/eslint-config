import type { Linter } from 'eslint'
// @ts-expect-error this plugin doesn't provide types
import plugin from 'eslint-plugin-promise'

export const config: Linter.Config[] = [
  {
    name: 'axiom/eslint-plugin-promise',
    ...plugin.configs['flat/recommended'],
    rules: {
      'promise/prefer-await-to-callbacks': 'error',
      'promise/prefer-await-to-then': ['error', { strict: true }]
    }
  }
]

export default config
