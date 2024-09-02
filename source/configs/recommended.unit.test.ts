import { describe, expect, it } from 'vitest'
import recommended from './recommended.ts'

describe('recommended', () => {
  it('should match the snapshot', () => {
    expect(recommended).toMatchSnapshot()
  })

  it('should include the 2bad config as the first element', () => {
    expect(recommended[0]?.name).toStrictEqual('axiom/rules/recommended')
  })

  it('should include the js recommended config', () => {
    expect(recommended[1]).toMatchSnapshot()
  })

  it('should include the ts recommended configs', () => {
    const tsConfigs = recommended.slice(2)

    expect(tsConfigs.some((config) => config.name === 'typescript-eslint/recommended')).toBe(true)
  })
})
