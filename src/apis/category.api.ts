import { Category } from '~/types/category.type'
import { SuccessResponse } from '~/types/utils.type'
import http from '~/utils/http'

const URL = 'categories'
const categoryApi = {
  getCategory: () => http.get<SuccessResponse<Category[]>>(URL)
}

export default categoryApi
