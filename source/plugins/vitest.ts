import plugin from '@vitest/eslint-plugin'
import type { Linter } from 'eslint'

export const config: Linter.Config[] = [
  {
    ...plugin.configs.recommended,
    name: 'eslint/plugin/vitest/recommended'
  },
  {
    name: 'axiom/plugin/vitest/overrides',
    files: ['**/*.test.ts'],
    // https://vitest.dev/guide/testing-types
    settings: {
      vitest: {
        typecheck: true
      }
    },
    languageOptions: {
      globals: plugin.environments.env.globals
    },
    rules: {
      'vitest/max-nested-describe': ['error', { max: 3 }],
      'vitest/no-hooks': ['error', { allow: ['afterEach'] }]
    }
  }
]

export default config
