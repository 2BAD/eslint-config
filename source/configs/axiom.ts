import type { Linter } from 'eslint'

const axiom: Linter.Config[] = [
  {
    name: 'axiom/rules/all',
    rules: {
      // Reason: https://github.com/standard/standard/issues/1464
      // Reason: https://github.com/eslint/eslint/pull/12613
      'no-void': ['error', { allowAsStatement: true }],
      '@typescript-eslint/no-floating-promises': 'error',
      // Reason: for..of works on any iterable
      // Reason: for..of supports all kinds of control flow in the loop body, like `continue`, `break`, `return`, `yield` and `await`.
      '@typescript-eslint/prefer-for-of': 'error',
      // Reason: prefer runtime private fields over compile time private properties
      'no-restricted-syntax': [
        'error',
        {
          selector: ':matches(PropertyDefinition, MethodDefinition)[accessibility="private"]',
          message: 'Use #private fields instead'
        }
      ]
    }
  }
]

export default axiom
