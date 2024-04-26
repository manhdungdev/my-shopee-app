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

export const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')

export const generateSEOUrl = ({ name, id }: { name: string; id: string }) =>
  removeSpecialCharacter(name).replace(/\s+/g, '-') + `-id.${id}`

export const getIdFromUrl = (nameId: string) => {
  const value = nameId.split('-id.')
  return value[value.length - 1]
}
