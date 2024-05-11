import { waitFor } from '@testing-library/react'
import { expect, it, describe } from 'vitest'
import { path } from '~/constants/path'
import { access_token } from '~/msw/auth.msw'
import { setAccsesTokenToLS } from '~/utils/auth'
import { logScreen, renderWithRouter } from '~/utils/testUtils'

describe('Profile', () => {
  it('Test Profile page', async () => {
    setAccsesTokenToLS(access_token)
    const { container } = renderWithRouter({ route: path.profile })
    await logScreen()
    await waitFor(() => {
      expect((container.querySelector('form input[placeholder="Name"]') as HTMLInputElement).value).toBe('HMDung18')
    })
  })
})
