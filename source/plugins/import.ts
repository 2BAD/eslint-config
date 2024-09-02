// eslint-disable-next-line n/no-extraneous-import
import tsParser from '@typescript-eslint/parser'
import plugin from 'eslint-plugin-import-x'

export const config = [
  plugin.flatConfigs.recommended,
  {
    name: 'import-x/typescript',
    ...plugin.flatConfigs.typescript
  },
  {
    name: 'axiom/plugin/import',
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    settings: {
      'import-x/resolver': {
        typescript: true
      }
    },
    rules: {
      'import-x/no-default-export': 'error'
    }
  }
]

export default config
