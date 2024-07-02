import { includeIgnoreFile } from '@eslint/compat'
import { resolve } from 'node:path'
import { describe, expect, it, vi } from 'vitest'
import setup from './setup.ts'

const ignores = ['**/logs', '**/tmp', '**/node_modules', '**/build', '**/coverage', '**/.env']

vi.mock('@eslint/compat', () => ({
  includeIgnoreFile: vi.fn((_) => ({
    name: 'Imported .gitignore patterns',
    ignores
  }))
}))

describe('setup', () => {
  it('should return an array of FlatConfig objects', () => {
    const dirname = '/some/dir'
    const expected = [
      {
        name: 'Imported .gitignore patterns',
        ignores
      },
      {
        name: '2bad/setup/linter-options',
        linterOptions: {
          reportUnusedDisableDirectives: 'error'
        }
      },
      {
        name: '2bad/setup/file-extension',
        files: ['**/*.ts', '**/*.cts', '**.*.mts']
      }
    ]

    const result = setup(dirname)

    expect(result).toEqual(expected)
  })

  it('should correctly resolve the .gitignore path', () => {
    const dirname = '/another/dir'
    const result = setup(dirname)
    const resolvedPath = resolve(dirname, '.gitignore')

    expect(includeIgnoreFile).toHaveBeenCalledWith(resolvedPath)
    expect(result[0]).toEqual({
      name: 'Imported .gitignore patterns',
      ignores
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
