import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-n'

export const config: Linter.Config[] = [
  {
    ...plugin.configs['flat/recommended-module'],
    name: 'eslint/plugin/node/recommended-module'
  },
  {
    name: 'axiom/plugin/node/overrides',
    rules: {
      'n/prefer-node-protocol': 'error',
      'n/no-missing-import': 'off'
    }
  }
]

export default config
