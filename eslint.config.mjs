import * as tb from './build/index.js'
import * as plugin from './build/plugins/index.js'

export default [
  ...tb.setup(import.meta.dirname),
  ...tb.default.configs.strict,
  ...plugin.promise,
  ...plugin.import,
  ...plugin.jsdoc
]
