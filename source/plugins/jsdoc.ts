import type { Linter } from 'eslint'
import plugin from 'eslint-plugin-jsdoc'

export const config: Linter.Config[] = [plugin.configs['flat/recommended-typescript']]

export default config
