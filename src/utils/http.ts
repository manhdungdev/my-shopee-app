import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'

// class Http {
//   instance: AxiosInstance
//   constructor() {
//     this.instance = axios.create({
//       baseURL: 'https://api-ecom.duthanhduoc.com/',
//       timeout: 10000,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//   }
// }
// const http = new Http().instance

const http = axios.create({
  baseURL: 'https://api-ecom.duthanhduoc.com/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

http.interceptors.response.use(
  function (response) {
    return response
  },
  function (error: AxiosError) {
    if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dataValue: any | undefined = error.response?.data
      const errorMessage = dataValue.message || error.message
      toast.error(errorMessage)
    }
    return Promise.reject(error)
  }
)

export default http
