import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { clearAccessTokenFromLS, getAccsesTokenFromLS, setAccsesTokenToLS } from './auth'
import { AuthResponse } from '~/types/auth.type'

class Http {
  instance: AxiosInstance
  private access_token: string
  constructor() {
    this.access_token = getAccsesTokenFromLS()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.access_token) {
          config.headers.Authorization = this.access_token
        }
        return config
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === 'login' || url === 'register') {
          this.access_token = (response.data as AuthResponse).data.access_token
          setAccsesTokenToLS(this.access_token)
        } else if (url === 'logout') {
          this.access_token = ''
          clearAccessTokenFromLS()
        }
        // const accessToken = response.data as Res
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
  }
}
const http = new Http().instance

// const http = axios.create({
//   baseURL: 'https://api-ecom.duthanhduoc.com/',
//   timeout: 10000,
//   headers: { 'Content-Type': 'application/json' }
// })

// http.interceptors.response.use(
//   function (response) {
//     return response
//   },
//   function (error: AxiosError) {
//     if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const dataValue: any | undefined = error.response?.data
//       const errorMessage = dataValue.message || error.message
//       toast.error(errorMessage)
//     }
//     return Promise.reject(error)
//   }
// )

export default http
