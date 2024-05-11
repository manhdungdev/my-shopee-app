import { afterAll, afterEach, beforeAll, expect } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, graphql, http, rest } from 'msw'
import { config } from './src/constants/config'
import authRequest from './src/msw/auth.msw'
import productRequest from './src/msw/product.msw'
import userRequest from './src/msw/user.msw'
import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

const loginRes = {
  message: 'Đăng nhập thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTVlOWRjYTcxYTZjMDI5ZGVjMzU0NSIsImVtYWlsIjoibWFuaGR1bmcxODEwMjAwM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTEwVDE0OjE2OjIxLjg3MVoiLCJpYXQiOjE3MTUzNTA1ODEsImV4cCI6MTcxNTM2MDU4MX0.8le2GGLc_cxeVrFjY4vZgytcoiT5pey7jODcHYjsBQ4',
    expires: 10000,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTVlOWRjYTcxYTZjMDI5ZGVjMzU0NSIsImVtYWlsIjoibWFuaGR1bmcxODEwMjAwM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTEwVDE0OjE2OjIxLjg3MVoiLCJpYXQiOjE3MTUzNTA1ODEsImV4cCI6MTc3NTM1MDU4MX0.cS-t0Oe-4xChoMF9umMQ7rd7oJF3k2P4e32NHQl0S4E',
    expires_refresh_token: 60000000,
    user: {
      _id: '6615e9dca71a6c029dec3545',
      roles: ['User'],
      email: 'manhdung18102003@gmail.com',
      createdAt: '2024-04-10T01:22:36.946Z',
      updatedAt: '2024-05-01T14:32:27.276Z',
      __v: 0,
      address: 'Việt Nam',
      date_of_birth: '2012-06-09T17:00:00.000Z',
      name: 'HMDung18',
      phone: '045114143223',
      avatar: '956e619a-0063-4df1-8bb4-974cecfaa5f6.jpg'
    }
  }
}

export const restHandlers = [
  http.post(`${config.baseUrl}login`, () => {
    return HttpResponse.json(loginRes)
  })
]

const server = setupServer(...restHandlers, ...authRequest, ...productRequest, ...userRequest)


// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
