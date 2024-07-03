import { describe, expect, it } from 'vitest'
import all from './all.ts'

describe('all', () => {
  it('should match the snapshot', () => {
    expect(all).toMatchSnapshot()
  })

  it('should include the 2bad config as the first element', () => {
    expect(all[0]).toStrictEqual({ name: '2bad/all' })
  })

  it('should include the js all config', () => {
    expect(all[1]).toMatchSnapshot()
  })

  it('should include the ts all configs', () => {
    const tsConfigs = all.slice(2)

    expect(tsConfigs.some((config) => config.name === 'typescript-eslint/all')).toBe(true)
  })
})
