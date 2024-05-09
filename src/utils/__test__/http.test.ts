import { describe, expect, it } from 'vitest'
import http, { Http } from '../http'
import { HttpStatusCode } from 'axios'
import { clearLS, setAccsesTokenToLS, setRefreshTokenToLS } from '../auth'
import { beforeEach } from 'vitest'

describe('Http Axios', () => {
  let http = new Http().instance
  beforeEach(() => {
    clearLS()
    http = new Http().instance
  })
  const access_token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTVlOWRjYTcxYTZjMDI5ZGVjMzU0NSIsImVtYWlsIjoibWFuaGR1bmcxODEwMjAwM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTA3VDAzOjQzOjMwLjg2NFoiLCJpYXQiOjE3MTUwNTM0MTAsImV4cCI6MTcxNTA1MzQxMX0.VqTMX-zRmxtQC2Uk-hPrIia8A8JnrH3enBQ1bTd3iUg'
  const refresh_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTVlOWRjYTcxYTZjMDI5ZGVjMzU0NSIsImVtYWlsIjoibWFuaGR1bmcxODEwMjAwM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTA3VDAzOjQzOjMwLjg2NFoiLCJpYXQiOjE3MTUwNTM0MTAsImV4cCI6MTc3NTA1MzQxMH0.bIRCG5oZabcARJVWy7Kryv4GIRXpFsHqOjRPCU40Y44'
  it('Call API', async () => {
    const res = await http.get('products')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Auth Request', async () => {
    await http.post('login', {
      email: 'manhdung18102003@gmail.com',
      password: '123123'
    })
    const res = await http.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Refresh token', async () => {
    setAccsesTokenToLS(access_token)
    setRefreshTokenToLS(refresh_token)
    const newHttp = new Http().instance
    const res = await newHttp.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
})
