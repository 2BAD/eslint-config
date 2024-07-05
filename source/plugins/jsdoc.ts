import type { Linter } from 'eslint'
import jsdoc from 'eslint-plugin-jsdoc'

export const config: Linter.FlatConfig[] = [jsdoc.configs['flat/recommended']]

export default config
