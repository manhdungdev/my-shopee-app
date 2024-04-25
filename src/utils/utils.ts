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

export const saleRating = (priceBefore: number, priceSale: number) =>
  Math.round(((priceBefore - priceSale) / priceBefore) * 100) + '%'

export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}
