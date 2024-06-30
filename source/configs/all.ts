import js from '@eslint/js'
import type { Linter } from 'eslint'
import ts from 'typescript-eslint'

const all: Linter.FlatConfig = Object.freeze({
  name: '2bad/all',
  ...js.configs.all,
  ...ts.configs.all
})

export default all
