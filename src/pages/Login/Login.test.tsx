import { waitFor, screen, fireEvent } from '@testing-library/react'
import { beforeAll, describe, expect } from 'vitest'
import { it } from 'vitest'
import { path } from '~/constants/path'
import { logScreen, renderWithRouter } from '~/utils/testUtils'
import '@testing-library/jest-dom/vitest'
import { beforeEach } from 'node:test'

describe('Login', () => {
  beforeAll(async () => {
    const { user } = renderWithRouter({ route: path.login })
    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument()
    })
  })

  it('Display required error when not input anything', async () => {
    const submitButton = document.querySelector('form button[type=submit]') as Element
    fireEvent.submit(submitButton)
    expect(await screen.findByText('Please enter your email')).toBeTruthy()
    expect(await screen.findByText('Please enter your password')).toBeTruthy()
    await logScreen()
  })

  it('Display required error when not input anything', async () => {
    const inputEmail = document.querySelector('form input[type=email]') as Element
    const inputPassword = document.querySelector('form input[type=password]') as Element
    const submitButton = document.querySelector('form button[type=submit]') as Element
    fireEvent.change(inputEmail, {
      target: {
        value: 'test@email'
      }
    })

    fireEvent.change(inputPassword, {
      target: {
        value: '1234'
      }
    })

    fireEvent.submit(submitButton)
    expect(await screen.findByText('Email is not valid form')).toBeTruthy()
    expect(await screen.findByText('Please input at least 6 characters')).toBeTruthy()
    await logScreen()
  })
})
