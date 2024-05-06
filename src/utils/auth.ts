import { User } from '~/types/user.type'

export const LocalStorageEventTarget = new EventTarget()

export const setAccsesTokenToLS = (access_token: string) => localStorage.setItem('access_token', access_token)
export const setRefreshTokenToLS = (access_token: string) => localStorage.setItem('refresh_token', access_token)
export const getAccsesTokenFromLS = () => localStorage.getItem('access_token') || ''
export const getRefreshTokenFromLS = () => localStorage.getItem('refresh_token') || ''
export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('profile')
  const clearLSEvent = new Event('clearLS')
  LocalStorageEventTarget.dispatchEvent(clearLSEvent)
}
export const getProfileFromLS = () => {
  const profile = localStorage.getItem('profile')
  return profile ? JSON.parse(profile) : null
}

export const setProfileToLS = (profile: User) => localStorage.setItem('profile', JSON.stringify(profile))
