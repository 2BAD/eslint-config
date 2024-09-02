import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-jsdoc'

export const config: Linter.Config[] = [
  {
    ...plugin.configs['flat/recommended-typescript'],
    name: 'eslint/plugin/jsdoc/recommended-typescript'
  },
  {
    rules: {
      'jsdoc/check-param-names': ['warn', { checkDestructured: false }],
      'jsdoc/require-hyphen-before-param-description': 'warn',
      'jsdoc/require-jsdoc': ['warn', { require: { FunctionExpression: true, ArrowFunctionExpression: true } }],
      'jsdoc/require-param': ['warn', { checkDestructured: false }],
      'jsdoc/require-returns': 'off',
      'jsdoc/require-throws': 'warn',
      'jsdoc/tag-lines': ['warn', 'any', { startLines: 1 }]
    }
  }
]

export default config
