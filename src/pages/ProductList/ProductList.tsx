import React from 'react'
import AsideFilter from '~/components/AsideFilter'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Product from '~/components/Product'
import SortProductList from '~/components/SortProductList'

export default function ProductList() {
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
              {Array(30)
                .fill(0)
                .map((_, index) => (
                  <div className='col'>
                    <Product />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
