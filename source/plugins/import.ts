// eslint-disable-next-line n/no-extraneous-import
import tsParser from '@typescript-eslint/parser'
import plugin from 'eslint-plugin-import-x'

export const config = [
  plugin.flatConfigs.recommended,
  plugin.flatConfigs.typescript,
  {
    name: '2bad/eslint-plugin-import',
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
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
