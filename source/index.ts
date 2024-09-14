import type { ESLint } from 'eslint'
import strict from './configs/strict.ts'
import stylistic from './configs/stylistic.ts'

export { axiom } from './axiom.ts'

export const configs = {
  strict,
  stylistic
} satisfies ESLint.Plugin['configs']
