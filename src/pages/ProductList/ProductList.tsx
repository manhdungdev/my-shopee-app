import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { isUndefined, omitBy } from 'lodash'
import React, { useState } from 'react'
import productApi from '~/apis/product.api'
import AsideFilter from '~/components/AsideFilter'
import Pagination from '~/components/Pagination'
import Product from '~/components/Product'
import SortProductList from '~/components/SortProductList'
import { sortBy } from '~/constants/product'
import useQueryParams from '~/hooks/useQueryParams'
import { ProductConfig } from '~/types/product.type'

export type QueryConfig = {
  [key in keyof ProductConfig]: string
}

export default function ProductList() {
  const queryParams = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit || '10',
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
  console.log(queryConfig)
  const [page, setPage] = useState(1)
  const { data } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => productApi.getProducts(queryConfig as ProductConfig),
    placeholderData: keepPreviousData
  })
  return (
    <main className='bg-[#f5f5f5] pt-[30px] pb-[60px] border-b-4 border-solid border-[#ee4d2d]'>
      <div className='w-11/12 md:w-10/12 mx-auto'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-2'>
            <AsideFilter />
          </div>
          <div className='col-span-10'>
            {data && (
              <>
                <SortProductList queryConfig={queryConfig} pageSize={data.data.data.pagination.page_size} />
                <div className='mt-6 grid grid-cols-5 gap-3'>
                  {data.data.data.products.map((product) => (
                    <div className='col' key={product._id}>
                      <Product product={product} />
                    </div>
                  ))}
                </div>
                <Pagination queryConfig={queryConfig} pageSize={data.data.data.pagination.page_size} />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
