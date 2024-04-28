import { useMutation, useQuery } from '@tanstack/react-query'
import { produce } from 'immer'
import { keyBy } from 'lodash'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { number } from 'yup'
import purchasesApi from '~/apis/purchases.api'
import QuantityController from '~/components/QuantityController'
import { path } from '~/constants/path'
import { purchasesStatus } from '~/constants/purchase'
import { AppContext } from '~/contexts/app.contexts'
import { Purchase } from '~/types/purchase.type'
import http from '~/utils/http'
import { formatCurreny, generateSEOUrl } from '~/utils/utils'

interface ExtendedPurchases extends Purchase {
  disabled: boolean
  checked: boolean
}

export default function Cart() {
  const { isAuthenticated } = useContext(AppContext)
  const purchasesInCart = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchasesApi.getPurchases({ status: purchasesStatus.inCart }),
    enabled: isAuthenticated
  })

  const updatePurchasesMutation = useMutation({
    mutationFn: purchasesApi.updatePurchases,
    onSuccess: () => {
      purchasesInCart.refetch()
    }
  })

  const [extendedPurchases, setExtendedPurchases] = useState<ExtendedPurchases[]>([])
  const isAllChecked = extendedPurchases.every((purchase) => purchase.checked)

  const purchasesInCartData = purchasesInCart.data?.data.data
  useEffect(() => {
    setExtendedPurchases((prev) => {
      const prevPurchases = keyBy(prev, '_id')
      return (
        purchasesInCartData?.map((purchase) => ({
          ...purchase,
          disabled: false,
          checked: Boolean(prevPurchases[purchase._id]?.checked)
        })) || []
      )
    })

    return () => {
      console.log('unmount')
    }
  }, [purchasesInCartData])

  const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtendedPurchases(
      produce((draft) => {
        draft[index].checked = event.target.checked
      })
    )
  }
  console.log('rerender')

  const handleQuantity = (index: number, value: number) => {
    const purchase = extendedPurchases[index]
    setExtendedPurchases(
      produce((draft) => {
        draft[index].disabled = true
      })
    )
    updatePurchasesMutation.mutate({ product_id: purchase.product._id, buy_count: value })
  }

  const handleCheckedAll = () => {
    setExtendedPurchases((prev) =>
      prev.map((purchase) => ({
        ...purchase,
        checked: !isAllChecked
      }))
    )
  }

  const handleOnTypeQuantity = (index: number) => (value: number) => {
    setExtendedPurchases(
      produce((draft) => {
        draft[index].buy_count = value
      })
    )
  }

  const handleFocusOut = (index: number, value: number, condition: boolean) => {
    const purchase = extendedPurchases[index]
    if (condition) {
      setExtendedPurchases(
        produce((draft) => {
          draft[index].disabled = true
        })
      )
      updatePurchasesMutation.mutate({ product_id: purchase.product._id, buy_count: value })
    }
  }

  return (
    <div className='bg-[#f5f5f5] pt-5 pb-[60px] border-b-4 border-solid border-[#ee4d2d]'>
      <div className='w-11/12 md:w-10/12 mx-auto'>
        <div className='p-6 pr-10 bg-white  rounded-sm'>
          <div className='grid grid-cols-12 '>
            <div className='col-span-5'>
              <div className='flex items-center gap-4'>
                {' '}
                <input
                  type='checkbox'
                  className='accent-[#EE4D2D] h-4 w-4'
                  checked={isAllChecked}
                  onChange={handleCheckedAll}
                />
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
          {extendedPurchases?.map((purchase, index) => (
            <div
              key={purchase._id}
              className='grid grid-cols-12 mt-8 p-4 first-child:mt-0  border border-solid border-gray-200 rounded-sm'
            >
              <div className='col-span-5'>
                <div className='flex items-center gap-4'>
                  <input
                    type='checkbox'
                    className='accent-[#EE4D2D] h-4 w-4'
                    checked={purchase.checked}
                    onChange={handleChange(index)}
                  />
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
                      <QuantityController
                        max={purchase.product.quantity}
                        value={purchase.buy_count}
                        onIncrease={(value) => handleQuantity(index, value)}
                        onType={handleOnTypeQuantity(index)}
                        onDecrease={(value) => handleQuantity(index, value)}
                        onFocusOut={(value) =>
                          handleFocusOut(
                            index,
                            value,
                            purchase.buy_count !== (purchasesInCartData as Purchase[])[index].buy_count
                          )
                        }
                        disabled={purchase.disabled}
                      />
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
              <input
                type='checkbox'
                className='accent-[#EE4D2D] h-4 w-4'
                id='select-all'
                checked={isAllChecked}
                onChange={handleCheckedAll}
              />
              <label htmlFor='select-all' className='select-none cursor-pointer'>
                Select all ({extendedPurchases.length})
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
