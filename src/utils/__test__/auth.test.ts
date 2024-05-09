import { beforeEach, describe, expect, it } from 'vitest'
import { clearLS, getAccsesTokenFromLS, getRefreshTokenFromLS, setAccsesTokenToLS, setRefreshTokenToLS } from '../auth'

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTVlOWRjYTcxYTZjMDI5ZGVjMzU0NSIsImVtYWlsIjoibWFuaGR1bmcxODEwMjAwM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTA3VDAwOjMyOjE1LjUwN1oiLCJpYXQiOjE3MTUwNDE5MzUsImV4cCI6MTcxNTA0MTk0MH0.q07v_RJ5jrpgJCgIXb5KtKQysvnnhPnAmW3wTo-zRug'
const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTVlOWRjYTcxYTZjMDI5ZGVjMzU0NSIsImVtYWlsIjoibWFuaGR1bmcxODEwMjAwM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTA2VDA4OjMzOjM3LjYzNloiLCJpYXQiOjE3MTQ5ODQ0MTcsImV4cCI6MTcxNTIwMDQxN30.wUgavC0mMtoG83Nnu2sPg8BWEQnk8AB3cgYOiXmxe-o'
const profile =
  '{"_id":"6615e9dca71a6c029dec3545","roles":["User"],"email":"manhdung18102003@gmail.com","createdAt":"2024-04-10T01:22:36.946Z","updatedAt":"2024-05-01T14:32:27.276Z","__v":0,"address":"Việt Nam","date_of_birth":"2012-06-09T17:00:00.000Z","name":"HMDung18","phone":"045114143223","avatar":"956e619a-0063-4df1-8bb4-974cecfaa5f6.jpg"}'

beforeEach(() => {
  localStorage.clear()
})

describe('access_token', () => {
  it('check access_token in LS', () => {
    setAccsesTokenToLS(access_token)
    expect(getAccsesTokenFromLS()).toBe(access_token)
  })
})

describe('refresh_token', () => {
  it('check refresh_token in LS', () => {
    setRefreshTokenToLS(refresh_token)
    expect(getRefreshTokenFromLS()).toBe(refresh_token)
  })
})

describe('clear LS', () => {
  it('LS is claered', () => {
    setAccsesTokenToLS(access_token)
    setRefreshTokenToLS(refresh_token)
    clearLS()
    expect(getAccsesTokenFromLS()).toBe('')
    expect(getRefreshTokenFromLS()).toBe('')
  })
})
