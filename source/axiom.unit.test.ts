import { includeIgnoreFile } from '@eslint/compat'
import { resolve } from 'node:path'
import { describe, expect, it, vi } from 'vitest'
import { axiom } from './axiom.ts'

const ignores = ['**/logs', '**/tmp', '**/node_modules', '**/build', '**/coverage', '**/.env']

vi.mock('@eslint/compat', () => ({
  includeIgnoreFile: vi.fn(() => ({
    name: 'axiom/setup/ignore-files',
    ignores
  }))
}))

describe('axiom', () => {
  it('should return an array of FlatConfig objects with correct properties', () => {
    const dirname = 'axiom'

    const result = axiom(dirname)

    expect(result).toBeInstanceOf(Array)
    expect(result).toHaveLength(27)

    expect(result[0]).toEqual({
      name: 'axiom/setup/ignore-files',
      ignores: ['**/logs', '**/tmp', '**/node_modules', '**/build', '**/coverage', '**/.env', 'eslint.config.mjs']
    })

    expect(result[1]).toMatchObject({
      name: 'axiom/setup/language-options',
      languageOptions: {
        parserOptions: {
          projectService: true
        }
      }
    })

    expect(result[1]?.languageOptions?.parserOptions?.['tsconfigRootDir']).toContain(dirname)

    expect(result[2]).toEqual({
      name: 'axiom/setup/file-extension',
      files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}']
    })
  })

  it('should correctly resolve the .gitignore path', () => {
    const dirname = '/another/dir'
    const result = axiom(dirname)
    const resolvedPath = resolve(dirname, '.gitignore')

    expect(includeIgnoreFile).toHaveBeenCalledWith(resolvedPath)
    expect(result[0]).toEqual({
      name: 'axiom/setup/ignore-files',
      ignores: ignores.concat(['eslint.config.mjs'])
    })
  })

  it('should include the file-extension object in the result', () => {
    const dirname = '/any/dir'
    const result = axiom(dirname)
    const fileExtensionConfig = result.find((config) => config.name === 'axiom/setup/file-extension')

    expect(fileExtensionConfig).toBeDefined()
    expect(fileExtensionConfig?.files).toEqual(['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'])
  })
})
