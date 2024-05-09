import { screen, waitFor } from '@testing-library/react'
import { describe, expect, test, it } from 'vitest'
import '@testing-library/jest-dom/vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import { logScreen, renderWithRouter } from './utils/testUtils'
import { path } from './constants/path'

expect.extend(matchers)

describe('App', () => {
  test('App render and navigate page', async () => {
    const { user } = renderWithRouter()
    await waitFor(() => {
      expect(document.querySelector('title')?.textContent).toBe('Products list | My Shopee App')
    })
    await user.click(screen.getByText('Sign in'))
    await waitFor(() => {
      expect(screen.queryByText('Not registered?')).toBeInTheDocument()
    })
    screen.debug(document.body.parentElement as HTMLElement, 9999999999)
  })

  test('Not Found page', async () => {
    const badRoute = '/some/bad/route'
    renderWithRouter({ route: badRoute })
    await waitFor(async () => {
      expect(screen.queryByText(/Page Not Found/i)).toBeInTheDocument()
    })
    await logScreen()
  })
  test('Register page', async () => {
    renderWithRouter({ route: path.register })
    await waitFor(async () => {
      expect(screen.queryByText(/Have an account\?/i)).toBeInTheDocument()
    })
    await logScreen()
  })
})
