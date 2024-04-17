import { User } from '~/types/user.type'

export const setAccsesTokenToLS = (access_token: string) => localStorage.setItem('access_token', access_token)
export const getAccsesTokenFromLS = () => localStorage.getItem('access_token') || ''
export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
}
export const getProfileFromLS = () => {
  const profile = localStorage.getItem('profile')
  return profile ? JSON.parse(profile) : null
}

export const setProfileToLS = (profile: User) => localStorage.setItem('profile', JSON.stringify(profile))
