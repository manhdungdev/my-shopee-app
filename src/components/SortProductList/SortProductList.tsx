import React from 'react'

export default function SortProductList() {
  return (
    <div className='flex items-center justify-between py-3 px-5 bg-[#00000008] rounded-sm'>
      <div className='flex items-center gap-3'>
        <span className='text-[#555] text-sm font-normal'>Sort by</span>
        <button className='flex items-center justify-center text-white bg-[#f05d40] hover:opacity-90  font-medium text-sm px-5 py-1.5 '>
          Popular
        </button>
        <button className='flex items-center justify-center bg-white text-black/80   hover:opacity-90  font-medium text-sm px-5 py-1.5 '>
          Latest
        </button>
        <button className='flex items-center justify-center bg-white text-black/80   hover:opacity-90  font-medium text-sm px-5 py-1.5 '>
          Top Sales
        </button>

        <select className='w-[200px] py-1.5 px-2 text-sm font-normal text-black/80 cursor-pointer'>
          <option value='price:' selected>
            Price
          </option>
          <option value='price:asc'>Price: Low to High</option>
          <option value='price:desc'>Price: High to Low</option>
        </select>
      </div>

      <div className='flex items-center gap-5'>
        <p className='text-black/80 text-sm'>
          <span className='text-[#ee4d2d]'>1</span>/<span>17</span>
        </p>
        <div>
          <button
            type='button'
            className='text-gray-900 bg-transparent border border-gray-300  hover:bg-white  font-medium rounded-sm text-sm p-3 duration-200 ease-in-out'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' height='10px'>
              <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
            </svg>
          </button>
          <button
            type='button'
            className='text-gray-900 bg-transparent border border-gray-300  hover:bg-white  font-medium rounded-sm text-sm p-3 duration-200 ease-in-out'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' height='10px'>
              <path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
