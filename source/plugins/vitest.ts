import plugin from '@vitest/eslint-plugin'
import type { Linter } from 'eslint'

export const config: Linter.FlatConfig[] = [
  {
    name: '2bad/eslint-plugin-vitest',
    ...plugin.configs.all,
    ...plugin.configs.env,
    files: ['**/*.test.ts'],
    // https://vitest.dev/guide/testing-types
    settings: {
      vitest: {
        typecheck: true
      }
    },
    languageOptions: {
      globals: {
        ...plugin.environments.env.globals
      }
    },
    rules: {
      // this rules are not part of 'all' preset for some reason
      ...plugin.configs.recommended.rules,
      'vitest/max-nested-describe': ['error', { max: 3 }],
      'vitest/no-hooks': ['error', { allow: ['afterEach'] }]
    }
  }
]

export default config
