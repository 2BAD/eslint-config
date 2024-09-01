import type { Linter } from 'eslint'
import neostandard from 'neostandard'

export const config: Linter.Config[] = [...neostandard({ ts: true })]

export default config
