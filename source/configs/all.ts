import js from '@eslint/js'
import type { Linter } from 'eslint'
import ts from 'typescript-eslint'

const recommended: Linter.FlatConfig[] = [
  {
    name: '2bad/all'
  },
  js.configs.all,
  ...(ts.configs.all as Linter.FlatConfig[])
]

export default recommended
