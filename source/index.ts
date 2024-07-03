import type { ESLint } from 'eslint'
import all from './configs/all.ts'
import recommended from './configs/recommended.ts'
import strict from './configs/strict.ts'
export { setup } from './setup.ts'

const plugin: ESLint.Plugin = {
  configs: {
    recommended,
    strict,
    all
  }
}

export default plugin
