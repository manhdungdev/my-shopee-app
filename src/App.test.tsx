import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test, it } from 'vitest'
import '@testing-library/jest-dom/vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

expect.extend(matchers)

describe('App', () => {
  test('App render and navigate page', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const user = userEvent.setup()
    await waitFor(() => {
      expect(document.querySelector('title')?.textContent).toBe('Products list | My Shopee App')
    })
    await user.click(screen.getByText('Sign in'))
    await waitFor(() => {
      expect(screen.queryByText('Not registered?')).toBeInTheDocument()
    })
    screen.debug(document.body.parentElement as HTMLElement, 9999999999)
  })
})
