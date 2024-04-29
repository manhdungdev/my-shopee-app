import { Purchase, PurchaseListStatus } from '~/types/purchase.type'
import { SuccessResponse } from '~/types/utils.type'
import http from '~/utils/http'

const URL = 'purchases'
const purchasesApi = {
  addToCard: (body: { product_id: string; buy_count: number }) =>
    http.post<SuccessResponse<Purchase>>(`${URL}/add-to-cart`, body),
  getPurchases: (params: { status: PurchaseListStatus }) =>
    http.get<SuccessResponse<Purchase[]>>(`${URL}`, {
      params
    }),
  buyPurchases: (body: { product_id: string; buy_count: number }[]) =>
    http.post<SuccessResponse<Purchase[]>>(`${URL}/buy-products`, body),
  updatePurchases: (body: { product_id: string; buy_count: number }) =>
    http.put<SuccessResponse<Purchase>>(`${URL}/update-purchase`, body),
  deletePurchases: (body: string[]) =>
    http.delete<SuccessResponse<Purchase[]>>(`${URL}`, {
      data: body
    })
}

export default purchasesApi
