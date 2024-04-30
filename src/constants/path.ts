import ChangePassword from "~/pages/User/pages/ChangePassword";

export const path = {
  home: '/',
  user: '/user',
  profile: '/user/profile',
  changePassword: '/user/password',
  historyPurchase: '/user/history',
  register: '/register',
  login: '/login',
  logout: '/logout',
  productDetail: ':nameId',
  cart: '/cart'
} as const
