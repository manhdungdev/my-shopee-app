import { path } from '~/constants/path'
import { AuthResponse } from '~/types/auth.type'
import http from '~/utils/http'
const authApi = {
  registerAccount: (body: { email: string; password: string }) => http.post<AuthResponse>(path.register, body),
  checkLogin: (body: { email: string; password: string }) => http.post<AuthResponse>(path.login, body),
  logOut: () => http.post(path.logout)
}

export default authApi
