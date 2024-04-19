import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import productApi from '~/apis/product.api'
import AsideFilter from '~/components/AsideFilter'
import Pagination from '~/components/Pagination'
import Product from '~/components/Product'
import SortProductList from '~/components/SortProductList'
import { ProductConfig } from '~/types/product.type'

export default function ProductList() {
  const searchParams = useSearchParams()
  const [page, setPage] = useState(1)
  const { data } = useQuery({
    queryKey: ['products', searchParams],
    queryFn: () => productApi.getProducts(searchParams as ProductConfig)
  })
  return (
    <main className='bg-[#f5f5f5] pt-[30px] pb-[60px] border-b-4 border-solid border-[#ee4d2d]'>
      <div className='w-11/12 md:w-10/12 mx-auto'>
        <div className='grid grid-cols-12 gap-5'>
          <div className='col-span-2'>
            <AsideFilter />
          </div>
          <div className='col-span-10'>
            <SortProductList />
            <div className='mt-6 grid grid-cols-5 gap-3'>
              {data &&
                data.data.data.products.map((product) => (
                  <div className='col' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
            </div>
            <Pagination page={page} setPage={setPage} pageSize={20} />
          </div>
        </div>
      </div>
    </main>
  )
}
