import { Product, ProductConfig, ProductList } from '~/types/product.type'
import { SuccessResponse } from '~/types/utils.type'
import http from '~/utils/http'

const URL = 'products'
const productApi = {
  getProducts: (params: ProductConfig) =>
    http.get<SuccessResponse<ProductList>>(URL, {
      params
    }),
  getProductDetail: (id: string) => http.get<SuccessResponse<Product>>(`${URL}/${id}`)
}

export default productApi
