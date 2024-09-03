import type { Linter } from 'eslint'

const axiom: Linter.Config[] = [
  {
    name: 'axiom/rules/all',
    rules: {
      // see: https://github.com/standard/standard/issues/1464
      // see: https://github.com/eslint/eslint/pull/12613
      'no-void': ['error', { allowAsStatement: true }],
      '@typescript-eslint/no-floating-promises': 'error'
    }
  }
]

export default axiom
