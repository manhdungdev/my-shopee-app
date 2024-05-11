import { render, screen, waitFor, waitForOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { expect } from 'vitest'
import App from '~/App'
import { path } from '~/constants/path'
import { AppProvider, getInitialAppContext } from '~/contexts/app.contexts'

export const delay = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

export const logScreen = async (options?: waitForOptions) => {
  const { timeout = 1000 } = options || {}
  await waitFor(async () => {
    expect(await delay(timeout - 100)).toBe(true)
  })
  screen.debug(document.body.parentElement as HTMLElement, 99999999)
}

export const renderWithRouter = ({ route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  const defaultValue = getInitialAppContext()
  return {
    ...render(
      <AppProvider defaultValue={defaultValue}>
        <App />
      </AppProvider>,
      {
        wrapper: BrowserRouter
      }
    ),
    user: userEvent.setup()
  }
}
