import { includeIgnoreFile } from '@eslint/compat'
import { resolve } from 'node:path'
import { describe, expect, it, vi } from 'vitest'
import { setup } from './setup.ts'

const ignores = ['**/logs', '**/tmp', '**/node_modules', '**/build', '**/coverage', '**/.env']

vi.mock('@eslint/compat', () => ({
  includeIgnoreFile: vi.fn(() => ({
    name: '2bad/setup/ignore-files',
    ignores
  }))
}))

describe('setup', () => {
  it('should return an array of FlatConfig objects', () => {
    const dirname = '/some/dir'

    const result = setup(dirname)

    expect(result).toMatchSnapshot()
  })

  it('should correctly resolve the .gitignore path', () => {
    const dirname = '/another/dir'
    const result = setup(dirname)
    const resolvedPath = resolve(dirname, '.gitignore')

    expect(includeIgnoreFile).toHaveBeenCalledWith(resolvedPath)
    expect(result[0]).toEqual({
      name: '2bad/setup/ignore-files',
      ignores: ignores.concat(['eslint.config.mjs'])
    })
  })

  it('should include the linter-options object in the result', () => {
    const dirname = '/any/dir'
    const result = setup(dirname)
    const linterOptionsConfig = result.find((config) => config.name === '2bad/setup/linter-options')

    expect(linterOptionsConfig).toBeDefined()
    expect(linterOptionsConfig?.linterOptions).toEqual({
      reportUnusedDisableDirectives: 'error'
    })
  })

  it('should include the file-extension object in the result', () => {
    const dirname = '/any/dir'
    const result = setup(dirname)
    const fileExtensionConfig = result.find((config) => config.name === '2bad/setup/file-extension')

    expect(fileExtensionConfig).toBeDefined()
    expect(fileExtensionConfig?.files).toEqual(['**/*.ts', '**/*.cts', '**.*.mts'])
  })
})
