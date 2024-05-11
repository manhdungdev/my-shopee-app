import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'
import { config } from '../constants/config'

const access_token_1s =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTVlOWRjYTcxYTZjMDI5ZGVjMzU0NSIsImVtYWlsIjoibWFuaGR1bmcxODEwMjAwM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTA3VDAzOjQzOjMwLjg2NFoiLCJpYXQiOjE3MTUwNTM0MTAsImV4cCI6MTcxNTA1MzQxMX0.VqTMX-zRmxtQC2Uk-hPrIia8A8JnrH3enBQ1bTd3iUg'
const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTVlOWRjYTcxYTZjMDI5ZGVjMzU0NSIsImVtYWlsIjoibWFuaGR1bmcxODEwMjAwM0BnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDI0LTA1LTA3VDAzOjQzOjMwLjg2NFoiLCJpYXQiOjE3MTUwNTM0MTAsImV4cCI6MTc3NTA1MzQxMH0.bIRCG5oZabcARJVWy7Kryv4GIRXpFsHqOjRPCU40Y44'

const meRes = {
  message: 'Lấy người dùng thành công',
  data: {
    _id: '6615e9dca71a6c029dec3545',
    roles: ['User'],
    email: 'manhdung18102003@gmail.com',
    createdAt: '2024-04-10T01:22:36.946Z',
    updatedAt: '2024-05-01T14:32:27.276Z',
    address: 'Việt Nam',
    date_of_birth: '2012-06-09T17:00:00.000Z',
    name: 'HMDung18',
    phone: '045114143223',
    avatar: '956e619a-0063-4df1-8bb4-974cecfaa5f6.jpg'
  }
}

const meExpiredRes = {
  message: 'Lỗi',
  data: {
    message: 'Token hết hạn',
    name: 'EXPIRED_TOKEN'
  }
}

const meRequest = http.get(`${config.baseUrl}me`, ({ request }) => {
  const access_token = request.headers.get('authorization')
//   console.log('Hello 2222')
  if (access_token === access_token_1s) {
    // console.log('Hello 1111')
    return HttpResponse.json(meExpiredRes, { status: 401 })
  }
  return HttpResponse.json(meRes, { status: 200 })
})

const userRequest = [meRequest]

export default userRequest
