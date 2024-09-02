import type { Linter } from 'eslint'

const axiom: Linter.Config[] = [
  {
    name: 'axiom/axiom',
    rules: {
      '@stylistic/space-before-function-paren': 'off',
      '@stylistic/lines-between-class-members': 'off'
    }
  }
]

export default axiom
