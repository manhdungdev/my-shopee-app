export const setAccsesTokenToLS = (access_token: string) => localStorage.setItem('access_token', access_token)
export const getAccsesTokenFromLS = () => localStorage.getItem('access_token') || ''
export const clearAccessTokenFromLS = () => localStorage.removeItem('access_token')
