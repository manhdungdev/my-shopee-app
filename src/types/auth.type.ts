import { User } from './user.type'
import { ResponseAPI } from './utils.type'

export type AuthResponse = ResponseAPI<{
  access_token: string
  expires: string
  user: User
}>
