import React from 'react'
import { Link } from 'react-router-dom'
import { Product as ProductType } from '~/types/product.type'
import { formatCurrency, formatCurrencyToSocialStyle, generateSEOUrl } from '~/utils/utils'
import ProductRating from '../ProductRating'
import { path } from '~/constants/path'

interface ProductProps {
  product: ProductType
}

export default function Product({ product }: ProductProps) {
  return (
    <Link to={`${path.home}${generateSEOUrl({ name: product.name, id: product._id })}`}>
      <div className='overflow-hidden rounded-sm bg-white shadow duration-200 hover:translate-y-[-3px] hover:shadow-lg'>
        <div className='relative w-full pt-[100%]'>
          <img className='absolute left-0 top-0 h-full w-full object-cover' src={product.image} alt={product.name} />
        </div>
        <div className='text-black/87 p-2 text-xs'>
          <p className='line-clamp-2 min-h-7 '>{product.name}</p>
          <div className='mt-5 flex items-center'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>
              <span>₫</span>
              <span className='text-sm'>{formatCurrency(product.price_before_discount)}</span>
            </div>
            <div className='ml-1 max-w-[50%] truncate text-[#ee4d2d]'>
              <span>₫</span>
              <span className='text-sm'>{formatCurrency(product.price)}</span>
            </div>
          </div>

          <div className='mt-3 flex items-center '>
            <ProductRating rating={product.rating} />
            {/* <div className='relative '>
              <div className='absolute top-0 left-0 w-[50%] h-full overflow-hidden'>
                <svg viewBox='0 0 15 15' x='0' y='0' className='  h-3 ' fill='yellow'>
                  <polygon points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'></polygon>
                </svg>
              </div>
              <svg enableBackground='new 0 0 15 15' viewBox='0 0 15 15' x={0} y={0} className='h-3 w-3' fill='#d0cccc'>
                <polygon points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4' />
              </svg>
            </div> */}

            <div className='ml-2 '>
              <span>{formatCurrencyToSocialStyle(product.sold)}</span>
              <span className='ml-1'>sold</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
