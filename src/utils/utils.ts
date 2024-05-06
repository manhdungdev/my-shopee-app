import axios, { AxiosError, HttpStatusCode } from 'axios'
import { config } from '~/constants/config'
import { ErrorResponse } from '~/types/utils.type'

export const isUnprocessableEntity = <T>(error: unknown): error is AxiosError<T> => {
  return axios.isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

export const isUnauthorizedError = <T>(error: unknown): error is AxiosError<T> => {
  return axios.isAxiosError(error) && error.response?.status === HttpStatusCode.Unauthorized
}

export const isExpiredTokenError = <T>(error: unknown): error is AxiosError<T> => {
  return (
    isUnauthorizedError<ErrorResponse<{ name: string; message: string }>>(error) &&
    error.response?.data.data?.name === 'EXPIRED_TOKEN'
  )
}

export const formatCurrency = (currency: number) => new Intl.NumberFormat('de-DE').format(currency)
export const formatCurrencyToSocialStyle = (currency: number) =>
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

export const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')

export const generateSEOUrl = ({ name, id }: { name: string; id: string }) =>
  removeSpecialCharacter(name).replace(/\s+/g, '-') + `-id.${id}`

export const getIdFromUrl = (nameId: string) => {
  const value = nameId.split('-id.')
  return value[value.length - 1]
}

export const getUrlAvatar = (nameAvatar?: string) => `${config.baseUrl}images/${nameAvatar}`
