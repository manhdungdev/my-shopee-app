import { describe, it, expect } from 'vitest'
import { isUnauthorizedError } from '../utils'
import { AxiosError, HttpStatusCode } from 'axios'
describe('isUnauthorizedError', () => {
  it('isUnauthorizedError must return boolean', () => {
    expect(isUnauthorizedError(new Error())).toBe(false)
    expect(
      isUnauthorizedError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.InternalServerError
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any)
      )
    ).toBe(false)
    expect(
      isUnauthorizedError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.Unauthorized
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any)
      )
    ).toBe(true)
  })
})
