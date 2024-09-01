import js from '@eslint/js'
import type { Linter } from 'eslint'
import ts from 'typescript-eslint'

const recommended: Linter.FlatConfig[] = [
  {
    name: '2bad/all'
  },
  js.configs.all,
  // eslint-disable-next-line import-x/no-named-as-default-member
  ...(ts.configs.all as Linter.FlatConfig[])
]

export default recommended
