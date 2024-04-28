import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import purchasesApi from '~/apis/purchases.api'
import QuantityController from '~/components/QuantityController'
import { path } from '~/constants/path'
import { purchasesStatus } from '~/constants/purchase'
import { AppContext } from '~/contexts/app.contexts'
import { formatCurreny, generateSEOUrl } from '~/utils/utils'

export default function Cart() {
  const { isAuthenticated } = useContext(AppContext)
  const purchasesInCart = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchasesApi.getPurchases({ status: purchasesStatus.inCart }),
    enabled: isAuthenticated
  })

  const purchasesInCartData = purchasesInCart.data?.data.data
  return (
    <div className='bg-[#f5f5f5] pt-5 pb-[60px] border-b-4 border-solid border-[#ee4d2d]'>
      <div className='w-11/12 md:w-10/12 mx-auto'>
        <div className='p-6 pr-10 bg-white  rounded-sm'>
          <div className='grid grid-cols-12 '>
            <div className='col-span-5'>
              <div className='flex items-center gap-4'>
                {' '}
                <input type='checkbox' className='accent-[#EE4D2D] h-4 w-4' />
                <span className=''>Product</span>
              </div>
            </div>
            <div className='col-span-7'>
              <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                  <p className='text-sm text-[#888888] text-center'>Unit Price</p>
                </div>
                <div className='col-span-3'>
                  <p className='text-sm text-[#888888] text-center'>Quantity</p>
                </div>
                <div className='col-span-3'>
                  <p className='text-sm text-[#888888] text-center'>Total Price</p>
                </div>
                <div className='col-span-3'>
                  <p className='text-sm text-[#888888] text-center'>Actions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='p-6 bg-white rounded-sm mt-5  '>
          {purchasesInCartData?.map((purchase) => (
            <div className='grid grid-cols-12 mt-8 p-4 first-child:mt-0  border border-solid border-gray-200 rounded-sm'>
              <div className='col-span-5'>
                <div className='flex items-center gap-4'>
                  <input type='checkbox' className='accent-[#EE4D2D] h-4 w-4' />
                  <Link
                    to={`${path.home}${generateSEOUrl({ name: purchase.product.name, id: purchase.product._id })}`}
                    className='flex gap-4 items-start'
                  >
                    <img
                      className='w-[80px] h-[80px] object-contain'
                      src={purchase.product.image}
                      alt={purchase.product.name}
                    />
                    <p className='max-w-[300px] line-clamp-4 mt-2 text-black/80'>{purchase.product.name}</p>
                  </Link>
                </div>
              </div>
              <div className='col-span-7'>
                <div className='grid grid-cols-12 h-full'>
                  <div className='col-span-3'>
                    <div className='flex items-center justify-center gap-3 text-sm h-full'>
                      <p className='relative flex items-center text-black/50 before:absolute before:left-0 before:w-full before:h-[1px] before:bg-black/50'>
                        <span className=' underline underline-offset-1 mr-[2px]'>đ</span>
                        <span>{formatCurreny(purchase.price_before_discount)}</span>
                      </p>
                      <p className='relative flex items-center text-black/90'>
                        <span className=' underline underline-offset-1 mr-[2px]'>đ</span>
                        <span className=' leading-9'>{formatCurreny(purchase.price)}</span>
                      </p>
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <div className='flex items-center justify-center h-full'>
                      <QuantityController max={purchase.product.quantity} />
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <div className='flex items-center justify-center h-full'>
                      <p className='relative flex items-center text-red-500'>
                        <span className=' underline underline-offset-1 mr-[2px]'>đ</span>
                        <span className=' leading-9'>{formatCurreny(purchase.price * purchase.buy_count)}</span>
                      </p>
                    </div>
                  </div>
                  <div className='col-span-3'>
                    <div className='flex items-center justify-center h-full w-full'>
                      <button className=' hover:text-red-500 text-sm'>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='sticky bottom-0 px-6 py-5 bg-white  rounded-sm mt-5 shadow-md border border-solid border-gray-200'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
              <input type='checkbox' className='accent-[#EE4D2D] h-4 w-4' id='select-all' />
              <label htmlFor='select-all' className='select-none cursor-pointer'>
                Select all (3)
              </label>
              <button>Delete</button>
            </div>
            <div className='flex items-center gap-6'>
              <div className='flex flex-col items-end gap-3'>
                <p>
                  Total (3 items): <span className='text-[#ee4d2d] text-2xl ml-[2px]'>₫171.600</span>
                </p>
                <p>
                  Saved <span className='text-[#ee4d2d] text-sm ml-8'>₫171.600</span>
                </p>
              </div>
              <button className='px-4 py-3 w-[210px] bg-[#ee4d2d] rounded-sm text-sm font-normal text-white hover:opacity-90'>
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
