import type { Linter } from 'eslint'

const axiom: Linter.Config[] = [
  {
    name: '2bad/axiom',
    rules: {
      '@stylistic/space-before-function-paren': 'off',
      '@stylistic/lines-between-class-members': 'off'
    }
  }
]

export default axiom
