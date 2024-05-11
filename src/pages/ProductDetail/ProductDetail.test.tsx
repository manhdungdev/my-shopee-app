import { describe, expect, test } from 'vitest'
import { delay, logScreen, renderWithRouter } from '~/utils/testUtils'

describe('Product detail', () => {
  test('Render UI Product detail', async () => {
    renderWithRouter({
      route: '/Điện-thoại-OPPO-A12-3GB32GB-Hàng-chính-hãng-id.60afb2426ef5b902180aacb9'
    })
    await delay(1000)
    expect(document.body).toMatchSnapshot()
    await logScreen()
  })
})
