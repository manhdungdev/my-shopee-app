import React from 'react'

import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'
// import { isUndefined, omitBy } from 'lodash'
import { sortBy } from '~/constants/product'
import useQueryParams from '~/hooks/useQueryParams'
import { ProductConfig } from '~/types/product.type'

export type QueryConfig = {
  [key in keyof ProductConfig]: string
}

export default function useQueryConfig() {
  const queryParams = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || '5',
      sort_by: queryParams.sort_by || sortBy.createdAt,
      order: queryParams.order,
      exclude: queryParams.exclude,
      rating_filter: queryParams.rating_filter,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      name: queryParams.name,
      category: queryParams.category
    },
    isUndefined
  )
  return queryConfig
}
