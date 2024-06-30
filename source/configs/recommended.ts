import js from '@eslint/js'
import type { Linter } from 'eslint'
import ts from 'typescript-eslint'

const recommended: Linter.FlatConfig = Object.freeze({
  name: '2bad/recommended',
  ...js.configs.recommended,
  ...ts.configs.recommended
})

export default recommended
