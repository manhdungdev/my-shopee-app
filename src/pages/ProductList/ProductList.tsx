import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import categoryApi from '~/apis/category.api'
import productApi from '~/apis/product.api'
import AsideFilter from '~/components/AsideFilter'
import Pagination from '~/components/Pagination'
import Product from '~/components/Product'
import SortProductList from '~/components/SortProductList'
import useQueryConfig from '~/hooks/useQueryConfig'
import { ProductConfig } from '~/types/product.type'

export type QueryConfig = {
  [key in keyof ProductConfig]: string
}

export default function ProductList() {
  const queryConfig = useQueryConfig()

  // console.log(queryConfig)
  const products = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => productApi.getProducts(queryConfig as ProductConfig),
    placeholderData: keepPreviousData,
    staleTime: 3 * 60 * 1000
  })

  const categories = useQuery({
    queryKey: ['categories', queryConfig],
    queryFn: () => categoryApi.getCategory(),
    placeholderData: keepPreviousData,
    staleTime: 3 * 60 * 1000
  })

  // console.log(products.data)

  // console.log(catogories.data)
  return (
    <main className='border-b-4 border-solid border-[#ee4d2d] bg-[#f5f5f5] pb-[60px] pt-[30px]'>
      <Helmet>
        <title>Products list | My Shopee App</title>
        <meta name='description' content='This is list of products' />
      </Helmet>
      <div className='mx-auto w-11/12 md:w-10/12'>
        <div className='grid grid-cols-12 gap-5'>
          {categories.data && products.data && (
            <div className='col-span-2'>
              <AsideFilter
                queryConfig={queryConfig}
                categories={categories.data.data.data}
                products={products.data.data.data.products}
              />
            </div>
          )}

          <div className='col-span-10'>
            {products.data && (
              <>
                <SortProductList queryConfig={queryConfig} pageSize={products.data.data.data.pagination.page_size} />
                <div className='mt-6 grid grid-cols-5 gap-3'>
                  {products.data.data.data.products.map((product) => (
                    <div className='col' key={product._id}>
                      <Product product={product} />
                    </div>
                  ))}
                </div>
                <Pagination queryConfig={queryConfig} pageSize={products.data.data.data.pagination.page_size} />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
