import js from '@eslint/js'
import type { Linter } from 'eslint'
import ts from 'typescript-eslint'

const recommended: Linter.Config[] = [
  {
    name: 'axiom/all'
  },
  js.configs.all,
  // eslint-disable-next-line import-x/no-named-as-default-member
  ...(ts.configs.all as Linter.Config[])
]

export default recommended
