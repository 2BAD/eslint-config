import js from '@eslint/js'
import type { Linter } from 'eslint'
import { configs } from 'typescript-eslint'

const strict: Linter.Config[] = [
  {
    name: 'axiom/rules/strict',
    rules: js.configs.recommended.rules
  },
  ...(configs.strict as Linter.Config[])
]

export default strict
