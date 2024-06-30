import js from '@eslint/js'
import type { Linter } from 'eslint'
import ts from 'typescript-eslint'

const strict: Linter.FlatConfig = Object.freeze({
  name: '2bad/strict',
  ...js.configs.all,
  ...ts.configs.strict
})

export default strict
