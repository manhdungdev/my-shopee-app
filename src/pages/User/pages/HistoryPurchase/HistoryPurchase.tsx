import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, createSearchParams } from 'react-router-dom'
import purchasesApi from '~/apis/purchases.api'
import { path } from '~/constants/path'
import { purchasesStatus } from '~/constants/purchase'
import useQueryParams from '~/hooks/useQueryParams'
import { PurchaseListStatus } from '~/types/purchase.type'
import { formatCurrency, generateSEOUrl } from '~/utils/utils'

const historyPurchase = [
  { status: purchasesStatus.all, name: 'All' },
  { status: purchasesStatus.waitForConfirmation, name: 'To pay' },
  { status: purchasesStatus.waitForGetting, name: 'To ship' },
  { status: purchasesStatus.inProgess, name: 'To receive' },
  { status: purchasesStatus.delivered, name: 'Completed' },
  { status: purchasesStatus.cancelled, name: 'Cancelled' }
]

export default function HistoryPurchase() {
  const queryStatus: { status?: string } = useQueryParams()
  const status: number = Number(queryStatus.status) || purchasesStatus.all

  const purchasesInCart = useQuery({
    queryKey: ['purchases', { status }],
    queryFn: () => purchasesApi.getPurchases({ status: status as PurchaseListStatus })
  })

  const purchasesInCartData = purchasesInCart.data?.data.data

  return (
    <div className='mt-4 '>
      <Helmet>
        <title>History purchase | My Shopee App</title>
        <meta name='description' content='This is history purchase page' />
      </Helmet>
      <div className='flex items-center rounded-sm bg-white '>
        {historyPurchase.map((item) => (
          <Link
            key={item.status}
            to={{
              pathname: path.historyPurchase,
              search: createSearchParams({
                status: item.status.toString()
              }).toString()
            }}
            className={`flex flex-1 items-center justify-center py-4 ${item.status === status ? 'border-b-2 border-solid border-red-500 font-medium text-red-500' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className='mt-3'>
        {purchasesInCartData?.map((purchase) => (
          <div key={purchase._id} className='mt-4 flex justify-between rounded-sm bg-white px-5 py-3'>
            <Link
              to={`${path.home}${generateSEOUrl({ name: purchase.product.name, id: purchase.product._id })}`}
              className='flex items-start gap-4'
            >
              <img
                className='h-[80px] w-[80px] object-contain'
                src={purchase.product.image}
                alt={purchase.product.name}
              />
              <div className='flex h-full flex-col justify-between'>
                {' '}
                <p className='mt-2 line-clamp-3 max-w-[300px] text-black/80'>{purchase.product.name}</p>
                <p className='mt-2  text-black/80'>x{purchase.buy_count}</p>
              </div>
            </Link>
            <div className='flex flex-col justify-between'>
              <div className='flex items-center justify-center gap-3 text-sm '>
                <p className='relative flex items-center text-black/50 before:absolute before:left-0 before:h-[1px] before:w-full before:bg-black/50'>
                  <span className=' mr-[2px] underline underline-offset-1'>đ</span>
                  <span>{formatCurrency(purchase.price_before_discount)}</span>
                </p>
                <p className='relative flex items-center text-red-500'>
                  <span className=' mr-[2px] underline underline-offset-1'>đ</span>
                  <span className=''>{formatCurrency(purchase.price)}</span>
                </p>
              </div>
              <div className='flex items-center justify-center gap-3 '>
                <p>Total price:</p>
                <p className='relative flex items-center text-red-500'>
                  <span className=' mr-[2px] underline underline-offset-1'>đ</span>
                  <span className=' leading-9'>{formatCurrency(purchase.price * purchase.buy_count)}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
