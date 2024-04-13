import axios, { AxiosError, HttpStatusCode } from 'axios'

export const isUnprocessableEntity = <T>(error: unknown): error is AxiosError<T> => {
  return axios.isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
