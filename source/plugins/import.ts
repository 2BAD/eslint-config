import { fixupPluginRules } from '@eslint/compat'
import plugin from 'eslint-plugin-import-x'

export const config = [
  {
    name: '2bad/eslint-plugin-import',
    plugins: {
      // @ts-expect-error old eslint types do not align with v9 eslint types
      import: fixupPluginRules({ meta: plugin.meta, rules: plugin.rules })
    },
    rules: {
      'import/no-unresolved': 'error'
    }
  }
]

export default config
