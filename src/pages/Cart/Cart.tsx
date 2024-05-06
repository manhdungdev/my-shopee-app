import { useMutation, useQuery } from '@tanstack/react-query'
import { produce } from 'immer'
import keyBy from 'lodash/keyBy'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { number } from 'yup'
import productApi from '~/apis/product.api'
import purchasesApi from '~/apis/purchases.api'
import QuantityController from '~/components/QuantityController'
import { path } from '~/constants/path'
import { purchasesStatus } from '~/constants/purchase'
import { AppContext } from '~/contexts/app.contexts'
import { Purchase } from '~/types/purchase.type'
import http from '~/utils/http'
import { formatCurrency, generateSEOUrl } from '~/utils/utils'
import noProduct from '../../assets/img/header/no-product.png'
import { Helmet } from 'react-helmet-async'

export default function Cart() {
  const location = useLocation()
  const idPurchaseBuyNow = (location.state as { purchaseId: string })?.purchaseId
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

  const deletePurchasesMutation = useMutation({
    mutationFn: purchasesApi.deletePurchases,
    onSuccess: () => {
      purchasesInCart.refetch()
    }
  })

  const buyPurchasesMutation = useMutation({
    mutationFn: purchasesApi.buyPurchases,
    onSuccess: (data) => {
      purchasesInCart.refetch()
      toast.success(data.data.message, {
        position: 'top-center',
        autoClose: 1000
      })
    }
  })

  const { extendedPurchases, setExtendedPurchases } = useContext(AppContext)
  const isAllChecked = useMemo(
    () => extendedPurchases.length > 0 && extendedPurchases.every((purchase) => Boolean(purchase.checked)),
    [extendedPurchases]
  )
  const checkedPurchases = useMemo(() => extendedPurchases.filter((purchase) => purchase.checked), [extendedPurchases])
  const pricePayment = useMemo(
    () => checkedPurchases.reduce((acc, purchase) => acc + purchase.price * purchase.buy_count, 0),
    [checkedPurchases]
  )
  const priceSaving = useMemo(
    () =>
      checkedPurchases.reduce(
        (acc, purchase) => acc + (purchase.price_before_discount - purchase.price) * purchase.buy_count,
        0
      ),
    [checkedPurchases]
  )

  const purchasesInCartData = purchasesInCart.data?.data.data
  useEffect(() => {
    setExtendedPurchases((prev) => {
      const prevPurchases = keyBy(prev, '_id')
      return (
        purchasesInCartData?.map((purchase) => ({
          ...purchase,
          disabled: false,
          checked: purchase._id == idPurchaseBuyNow || Boolean(prevPurchases[purchase._id]?.checked)
        })) || []
      )
    })
  }, [purchasesInCartData, idPurchaseBuyNow, setExtendedPurchases])

  useEffect(() => {
    return () => {
      history.replaceState(null, '')
    }
  }, [])

  const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtendedPurchases(
      produce((draft) => {
        draft[index].checked = event.target.checked
      })
    )
  }

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

  const handleDeletePurchase = (index: number) => {
    const purchase = extendedPurchases[index]
    deletePurchasesMutation.mutate([purchase._id])
  }

  const handleDeletePurchases = () => {
    const purchasesIdsDelete = checkedPurchases.map((purchase) => purchase._id)
    deletePurchasesMutation.mutate(purchasesIdsDelete)
  }

  const handleBuyPurchases = () => {
    if (checkedPurchases.length > 0) {
      const body: { product_id: string; buy_count: number }[] = checkedPurchases.map((purchase) => ({
        product_id: purchase.product._id,
        buy_count: purchase.buy_count
      }))
      buyPurchasesMutation.mutate(body)
    }
  }

  return (
    <div className='border-b-4 border-solid border-[#ee4d2d] bg-[#f5f5f5] pb-[60px] pt-5'>
      <Helmet>
        <title>Cart | My Shopee App</title>
        <meta name='description' content='This is cart of products' />
      </Helmet>
      <div className='mx-auto w-11/12 md:w-10/12'>
        {extendedPurchases.length > 0 ? (
          <>
            <div className='rounded-sm bg-white p-6  pr-10'>
              <div className='grid grid-cols-12 '>
                <div className='col-span-5'>
                  <div className='flex items-center gap-4'>
                    {' '}
                    <input
                      type='checkbox'
                      className='h-4 w-4 accent-[#EE4D2D]'
                      checked={isAllChecked}
                      onChange={handleCheckedAll}
                    />
                    <span className=''>Product</span>
                  </div>
                </div>
                <div className='col-span-7'>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-3'>
                      <p className='text-center text-sm text-[#888888]'>Unit Price</p>
                    </div>
                    <div className='col-span-3'>
                      <p className='text-center text-sm text-[#888888]'>Quantity</p>
                    </div>
                    <div className='col-span-3'>
                      <p className='text-center text-sm text-[#888888]'>Total Price</p>
                    </div>
                    <div className='col-span-3'>
                      <p className='text-center text-sm text-[#888888]'>Actions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-5 rounded-sm bg-white p-6  '>
              {extendedPurchases?.map((purchase, index) => (
                <div
                  key={purchase._id}
                  className='first-child:mt-0 mt-8 grid grid-cols-12 items-center rounded-sm  border border-solid border-gray-200 p-4'
                >
                  <div className='col-span-5'>
                    <div className='flex items-center gap-4'>
                      <input
                        type='checkbox'
                        className='h-4 w-4 accent-[#EE4D2D]'
                        checked={purchase.checked}
                        onChange={handleChange(index)}
                      />
                      <Link
                        to={`${path.home}${generateSEOUrl({ name: purchase.product.name, id: purchase.product._id })}`}
                        className='flex items-start gap-4'
                      >
                        <img
                          className='h-[80px] w-[80px] object-contain'
                          src={purchase.product.image}
                          alt={purchase.product.name}
                        />
                        <p className='mt-2 line-clamp-4 max-w-[300px] text-black/80'>{purchase.product.name}</p>
                      </Link>
                    </div>
                  </div>
                  <div className='col-span-7'>
                    <div className='grid h-full grid-cols-12'>
                      <div className='col-span-3'>
                        <div className='flex items-center justify-center gap-3 text-sm '>
                          <p className='relative flex items-center text-black/50 before:absolute before:left-0 before:h-[1px] before:w-full before:bg-black/50'>
                            <span className=' mr-[2px] underline underline-offset-1'>đ</span>
                            <span>{formatCurrency(purchase.price_before_discount)}</span>
                          </p>
                          <p className='relative flex items-center text-black/90'>
                            <span className=' mr-[2px] underline underline-offset-1'>đ</span>
                            <span className=' leading-9'>{formatCurrency(purchase.price)}</span>
                          </p>
                        </div>
                      </div>
                      <div className='col-span-3'>
                        <div className='flex items-center justify-center '>
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
                        <div className='flex items-center justify-center '>
                          <p className='relative flex items-center text-red-500'>
                            <span className=' mr-[2px] underline underline-offset-1'>đ</span>
                            <span className=' leading-9'>{formatCurrency(purchase.price * purchase.buy_count)}</span>
                          </p>
                        </div>
                      </div>
                      <div className='col-span-3'>
                        <div className='flex h-full w-full items-center justify-center'>
                          <button className=' text-sm hover:text-red-500' onClick={() => handleDeletePurchase(index)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='sticky bottom-0 mt-5 rounded-sm border  border-solid border-gray-200 bg-white px-6 py-5 shadow-md'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-5'>
                  <input
                    type='checkbox'
                    className='h-4 w-4 accent-[#EE4D2D]'
                    id='select-all'
                    checked={isAllChecked}
                    onChange={handleCheckedAll}
                  />
                  <label htmlFor='select-all' className='cursor-pointer select-none'>
                    Select all ({extendedPurchases.length})
                  </label>
                  <button onClick={handleDeletePurchases}>Delete</button>
                </div>
                <div className='flex items-center gap-6'>
                  <div className='flex flex-col items-end gap-3'>
                    <p>
                      Total ({checkedPurchases.length} items):{' '}
                      <span className='ml-[2px] text-2xl text-[#ee4d2d]'>₫{formatCurrency(pricePayment)}</span>
                    </p>
                    <p>
                      Saved <span className='ml-8 text-sm text-[#ee4d2d]'>₫{formatCurrency(priceSaving)}</span>
                    </p>
                  </div>
                  <button
                    className='w-[210px] rounded-sm bg-[#ee4d2d] px-4 py-3 text-sm font-normal text-white hover:opacity-90'
                    disabled={buyPurchasesMutation.isPending}
                    onClick={handleBuyPurchases}
                  >
                    Check out
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className='flex flex-col items-center justify-center gap-5'>
            <img src={noProduct} alt='' className='mt-16 h-[110px]' />
            <p className='text-sm font-bold text-black/40'>Your shopping cart is empty</p>
            <Link to={path.home} className='rounded-sm bg-[#ee4d2d] px-12 py-3 font-normal capitalize text-white'>
              Go shopping now
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
