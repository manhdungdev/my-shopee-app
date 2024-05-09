import { waitFor, screen } from '@testing-library/react'
import { describe, expect } from 'vitest'
import { it } from 'vitest'
import { path } from '~/constants/path'
import { logScreen, renderWithRouter } from '~/utils/testUtils'
import '@testing-library/jest-dom/vitest'

describe('Login', () => {
  it('Display required error when not input anything', async () => {
    const { user } = renderWithRouter({ route: path.login })
    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument()
    })
    const submitButton = document.querySelector('form button[type=submit]') as Element
    user.click(submitButton)
    expect(await screen.findByText('Please enter your email')).toBeTruthy()
    expect(await screen.findByText('Please enter your password')).toBeTruthy()
    await logScreen()
  })
})
