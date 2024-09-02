import { describe, expect, it } from 'vitest'
import strict from './strict.ts'

describe('strict', () => {
  it('should match the snapshot', () => {
    expect(strict).toMatchSnapshot()
  })

  it('should include the 2bad config as the first element', () => {
    expect(strict[0]?.name).toStrictEqual('axiom/rules/strict')
  })

  it('should include the js all config', () => {
    expect(strict[1]).toMatchSnapshot()
  })

  it('should include the ts strict configs', () => {
    const tsConfigs = strict.slice(1)

    expect(tsConfigs.some((config) => config.name === 'typescript-eslint/strict')).toBe(true)
  })
})
