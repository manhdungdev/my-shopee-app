import { waitFor, screen, fireEvent } from '@testing-library/react'
import { beforeAll, describe, expect, it, test } from 'vitest'
import { path } from '~/constants/path'
import { logScreen, renderWithRouter } from '~/utils/testUtils'
import '@testing-library/jest-dom/vitest'

describe('Login', () => {
  let inputEmail: HTMLInputElement
  let inputPassword: HTMLInputElement
  let submitButton: HTMLButtonElement
  beforeAll(async () => {
    const { user } = renderWithRouter({ route: path.login })
    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument()
    })
    inputEmail = document.querySelector('form input[type=email]') as HTMLInputElement
    inputPassword = document.querySelector('form input[type=password]') as HTMLInputElement
    submitButton = document.querySelector('form button[type=submit]') as HTMLButtonElement
  })

  it('Display required error when not input anything', async () => {
    const submitButton = document.querySelector('form button[type=submit]') as Element
    fireEvent.submit(submitButton)
    expect(await screen.findByText('Please enter your email')).toBeTruthy()
    expect(await screen.findByText('Please enter your password')).toBeTruthy()
    await logScreen()
  })

  test('Display error when input value', async () => {
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
    await waitFor(async () => {
      expect(screen.queryByText('Email is not valid form')).toBeTruthy()
      expect(screen.queryByText('Please input at least 6 characters')).toBeTruthy()
    })
    await logScreen()
  })

  it('Not display when input true email and password', async () => {
    fireEvent.change(inputEmail, {
      target: {
        value: 'test@gmail.com'
      }
    })

    fireEvent.change(inputPassword, {
      target: {
        value: '123456'
      }
    })

    await waitFor(async () => {
      expect(screen.queryByText('Email is not valid form')).toBeFalsy()
      expect(screen.queryByText('Please input at least 6 characters')).toBeFalsy()
    })
    fireEvent.submit(submitButton)
    await logScreen()
  })
})
