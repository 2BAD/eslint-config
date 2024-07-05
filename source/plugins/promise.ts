import type { Linter } from 'eslint'
// @ts-expect-error this plugin doesn't provide types
import plugin from 'eslint-plugin-promise'

export const config: Linter.FlatConfig[] = [
  {
    name: '2bad/eslint-plugin-promise',
    ...plugin.configs['flat/recommended']
  }
]

export default config
