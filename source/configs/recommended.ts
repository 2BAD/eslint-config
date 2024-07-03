import js from '@eslint/js'
import type { Linter } from 'eslint'
import ts from 'typescript-eslint'

const recommended: Linter.FlatConfig[] = [
  {
    name: '2bad/recommended'
  },
  js.configs.recommended,
  ...(ts.configs.recommended as Linter.FlatConfig[])
]

export default recommended
