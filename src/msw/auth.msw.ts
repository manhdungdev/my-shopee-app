import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, graphql, http } from 'msw'
import { config } from '../constants/config'
import { HttpStatusCode } from 'axios'

export const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTVlOWRjYTcxYTZjMDI5ZGVjMzU0NSIsImVtYWlsIjoibWFuaGR1bmcxODEwMjAwM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTA3VDAzOjQzOjMwLjg2NFoiLCJpYXQiOjE3MTUwNTM0MTAsImV4cCI6MTcxNTA1MzQxMX0.VqTMX-zRmxtQC2Uk-hPrIia8A8JnrH3enBQ1bTd3iUg'
export const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTVlOWRjYTcxYTZjMDI5ZGVjMzU0NSIsImVtYWlsIjoibWFuaGR1bmcxODEwMjAwM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTA3VDAzOjQzOjMwLjg2NFoiLCJpYXQiOjE3MTUwNTM0MTAsImV4cCI6MTc3NTA1MzQxMH0.bIRCG5oZabcARJVWy7Kryv4GIRXpFsHqOjRPCU40Y44'

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

const refreshTokenRes = {
  message: 'Refresh Token thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTVlOWRjYTcxYTZjMDI5ZGVjMzU0NSIsImVtYWlsIjoibWFuaGR1bmcxODEwMjAwM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTExVDAwOjE5OjE1LjUzMFoiLCJpYXQiOjE3MTUzODY3NTUsImV4cCI6MTcxNTk5MTU1NX0.XTTZxkVDZAHuwAAXU-vlvxcRIXyVtrzM-ZS_YRDsZTo'
  }
}

const loginRequest = http.post(`${config.baseUrl}login`, () => {
  return HttpResponse.json(loginRes, { status: 200 })
})

const refreshToken = http.post(`${config.baseUrl}refresh-access-token`, () => {
  return HttpResponse.json(refreshTokenRes, { status: 200 })
})

const authRequest = [loginRequest, refreshToken]

export default authRequest
