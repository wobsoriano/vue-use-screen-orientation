/**
 * @vitest-environment jsdom
 */

import { describe, expect, test, vi } from 'vitest'
import { renderComposable } from 'vue-test-composables'
import { useScreenOrientation } from '../src'

describe('useScreenOrientation', () => {
  test('portrait', () => {
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(orientation: portrait)',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))

    const { result } = renderComposable(() => useScreenOrientation())

    expect(result.value).toBe('portrait')
  })

  test('landscape', () => {
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(orientation: landscape)',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))

    const { result } = renderComposable(() => useScreenOrientation())

    expect(result.value).toBe('landscape')
  })
})
