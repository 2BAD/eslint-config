import type { Linter } from 'eslint'
import neostandard from 'neostandard'

const ns = neostandard({ ts: true })

const standardRules = ns.flatMap((config) => {
  if (!config.rules) return {}

  // Filter out rules that start with 'n/'
  const filteredRules = Object.fromEntries(Object.entries(config.rules).filter(([key]) => !key.startsWith('react/')))

  if (Object.keys(config.plugins ?? []).includes('@stylistic')) return config
  return { rules: filteredRules }
})

export const config: Linter.Config[] = standardRules

export default config
