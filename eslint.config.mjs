import * as tb from '@2bad/axiom'
import * as plugins from '@2bad/axiom/plugins'

export default [tb.setup(import.meta.dirname), tb.configs.strict, ...Object.values(plugins)].flat()
