import plugin from '@vitest/eslint-plugin'
import type { Linter } from 'eslint'

export const config: Linter.FlatConfig[] = [
  {
    name: '2bad/eslint-plugin-vitest',
    files: ['source/**.test.ts'],
    plugins: {
      plugin
    },
    rules: {
      ...plugin.configs.all.rules,
      'vitest/max-nested-describe': ['error', { max: 3 }],
      'vitest/no-hooks': ['error', { allow: ['afterEach'] }]
    }
  }
]

export default config
