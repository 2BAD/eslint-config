import type { ESLint } from 'eslint'
import all from './configs/all.ts'
import recommended from './configs/recommended.ts'
import strict from './configs/strict.ts'
import stylistic from './configs/stylistic.ts'

export { axiom } from './axiom.ts'

export const configs = {
  all,
  recommended,
  strict,
  stylistic
} satisfies ESLint.Plugin['configs']
