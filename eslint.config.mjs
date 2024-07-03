import tb, { setup } from './build/index.js'

export default [...setup(import.meta.dirname), ...tb.configs.strict]
