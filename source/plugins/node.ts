import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-n'

export const config: Linter.Config[] = [
  plugin.configs['flat/recommended-module'],
  {
    rules: {
      'n/prefer-node-protocol': 'error'
    }
  }
]

export default config
