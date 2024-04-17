import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { clearLS, getAccsesTokenFromLS, setAccsesTokenToLS, setProfileToLS } from './auth'
import { AuthResponse } from '~/types/auth.type'
import { path } from '~/constants/path'

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
        console.log(response)
        if (url === path.login) {
          console.log(response)
          const data = response.data as AuthResponse
          this.access_token = data.data.access_token
          setAccsesTokenToLS(this.access_token)
          setProfileToLS(data.data.user)
        } else if (url === path.logout) {
          this.access_token = ''
          clearLS()
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
