import axios, { AxiosError, HttpStatusCode } from 'axios'

export const isUnprocessableEntity = <T>(error: unknown): error is AxiosError<T> => {
  return axios.isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

export const formatCurreny = (currency: number) => new Intl.NumberFormat('de-DE').format(currency)
export const formatCurrenyToSocialStyle = (currency: number) =>
  new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(currency)
    .replace('.', ',')
    .toLowerCase()
