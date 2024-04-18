import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='overflow-hidden rounded-sm bg-white shadow duration-200 hover:translate-y-[-3px] hover:shadow-lg'>
        <div className='relative w-full pt-[100%]'>
          <img
            className='absolute w-full h-full object-cover top-0 left-0'
            src='https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llmyzv0274589d_tn'
            alt=''
          />
        </div>
        <div className='p-2 text-xs text-black/87'>
          <p className='min-h-7 line-clamp-2 '>
            Điện thoại LG V50 ThinQ 3 Camera bản Hàn Quốc ram 6G/128G /Snap855 Chiến PUBG/Liên Q
          </p>
          <div className='flex items-center mt-5'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>
              <span>₫</span>
              <span className='text-sm'>2000</span>
            </div>
            <div className='max-w-[50%] ml-1 truncate text-[#ee4d2d]'>
              <span>₫</span>
              <span className='text-sm'>1000</span>
            </div>
          </div>

          <div className='mt-3 flex items-center '>
            {/* <ProductRating rating={product.rating} /> */}
            <div className='relative '>
              <div className='absolute top-0 left-0 w-[50%] h-full overflow-hidden'>
                <svg enable-background='new 0 0 15 15' viewBox='0 0 15 15' x='0' y='0' className='  h-3 ' fill='yellow'>
                  <polygon
                    points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-miterlimit='10'
                  ></polygon>
                </svg>
              </div>
              <svg enableBackground='new 0 0 15 15' viewBox='0 0 15 15' x={0} y={0} className='h-3 w-3' fill='#d0cccc'>
                <polygon
                  points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                />
              </svg>
            </div>

            <div className='ml-2 '>
              <span>5.66k</span>
              <span className='ml-1'>sold</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
