import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import {
  clearLS,
  getAccsesTokenFromLS,
  getRefreshTokenFromLS,
  setAccsesTokenToLS,
  setProfileToLS,
  setRefreshTokenToLS
} from './auth'
import { AuthResponse, RefreshTokenResponse } from '~/types/auth.type'
import { path } from '~/constants/path'
import { config } from '~/constants/config'
import { URL_LOGIN, URL_LOGOUT, URL_REFRESH_TOKEN } from '~/apis/auth.api'
import { isExpiredTokenError, isUnauthorizedError } from './utils'
import { ErrorResponse } from '~/types/utils.type'

class Http {
  instance: AxiosInstance
  private access_token: string
  private refresh_token: string
  private refreshTokenRequest: Promise<string> | null
  constructor() {
    this.access_token = getAccsesTokenFromLS()
    this.refresh_token = getRefreshTokenFromLS()
    this.refreshTokenRequest = null
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'expire-access-token': 5,
        'expire-refresh-token': 60 * 60 * 60
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
        console.log(response.config)
        if (url === URL_LOGIN) {
          const data = response.data as AuthResponse
          this.access_token = data.data.access_token
          this.refresh_token = data.data.refresh_token
          setAccsesTokenToLS(this.access_token)
          setRefreshTokenToLS(this.refresh_token)
          setProfileToLS(data.data.user)
        } else if (url === URL_LOGOUT) {
          this.access_token = ''
          this.refresh_token = ''
          clearLS()
        }
        // const accessToken = response.data as Res
        return response
      },
      (error: AxiosError) => {
        if (
          ![HttpStatusCode.UnprocessableEntity, HttpStatusCode.Unauthorized].includes(error.response?.status as number)
        ) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const dataValue: any | undefined = error.response?.data
          const errorMessage = dataValue?.message || error.message
          toast.error(errorMessage)
        }
        if (isUnauthorizedError<ErrorResponse<{ name: string; message: string }>>(error)) {
          const config = error.response?.config
          if (config) {
            const { url } = config
            if (isExpiredTokenError(error) && url !== URL_REFRESH_TOKEN) {
              this.refreshTokenRequest = this.refreshTokenRequest
                ? this.refreshTokenRequest
                : this.handleRefreshToken().finally(() => {
                    setTimeout(() => {
                      this.refreshTokenRequest = null
                    }, 10000)
                  })
              return this.refreshTokenRequest.then((accessToken) => {
                return this.instance({ ...config, headers: { ...config.headers, Authorization: accessToken } })
              })
            }
          }
          clearLS()
          this.access_token = ''
          this.refresh_token = ''
          toast.error(error.response?.data.data?.message || error.response?.data.message)
          // window.location.reload()
        }
        return Promise.reject(error)
      }
    )
  }
  private handleRefreshToken = () => {
    return this.instance
      .post<RefreshTokenResponse>(URL_REFRESH_TOKEN, {
        refresh_token: this.refresh_token
      })
      .then((res) => {
        const accessToken = res.data.data.access_token
        this.access_token = accessToken
        setAccsesTokenToLS(accessToken)
        return accessToken
      })
      .catch((error) => {
        clearLS()
        this.access_token = ''
        this.refresh_token = ''
        throw error
      })
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
