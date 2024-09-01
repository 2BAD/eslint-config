import js from '@eslint/js'
import type { Linter } from 'eslint'
import ts from 'typescript-eslint'

const recommended: Linter.FlatConfig[] = [
  {
    name: '2bad/recommended'
  },
  js.configs.recommended,
  // eslint-disable-next-line import-x/no-named-as-default-member
  ...(ts.configs.recommended as Linter.FlatConfig[])
]

export default recommended
