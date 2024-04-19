import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '~/constants/path'

export default function AsideFilter() {
  return (
    <div>
      <Link to={path.home} className='flex items-center font-bold text-black/80'>
        <svg viewBox='0 0 12 10' className='h-3 mr-3'>
          <g fillRule='evenodd' stroke='none' strokeWidth={1}>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                </g>
              </g>
            </g>
          </g>
        </svg>

        <span>All categories</span>
      </Link>
      <div className='my-[15px] h-[1px] w-full bg-gray-300' />
      <ul>
        <li>
          <Link to={path.home} className='relative flex items-center px-3 py-2 text-[#ee4d2d] font-bold text-sm'>
            <svg viewBox='0 0 4 7' className='absolute left-0 h-2 fill-red-500'>
              <polygon points='4 3.5 0 0 0 7'></polygon>
            </svg>
            <span>Consumer Electronics</span>
          </Link>
        </li>
        <li>
          <Link
            to={path.home}
            className='relative flex items-center px-3 py-2 font-medium text-sm hover:text-[#ee4d2d]'
          >
            <span>Wearable Devices</span>
          </Link>
        </li>
      </ul>
      <Link to={path.home} className='flex items-center font-bold text-black/80 mt-8'>
        <svg viewBox='0 0 15 15' x='0' y='0' className='h-3 mr-3'>
          <g>
            <polyline fill='none' stroke='black' points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'></polyline>
          </g>
        </svg>
        <span>SEARCH FILTER</span>
      </Link>
      <div className='my-[10px] h-[1px] w-full bg-gray-300' />
      <p className='py-[10px] font-normal text-sm'>Price Range</p>
      <form action='' className=' mt-[10px] text-sm'>
        <div className='flex justify-between items-center  gap-[10px] '>
          <input
            type='text'
            className='w-full px-2 py-[5px] placeholder:text-xs placeholder:color-black/80'
            placeholder='₫ MIN'
          />
          <span className='w-[10px] h-[1px] bg-slate-500 block shrink-0'></span>
          <input
            type='text'
            className='w-full px-2 py-[5px] placeholder:text-xs placeholder:color-black/80'
            placeholder='₫ MAX'
          />
        </div>

        <button
          type='button'
          className='mt-5 w-full uppercase  text-white bg-[#f05d40] hover:opacity-90  font-medium text-sm px-5 py-1.5 '
        >
          Apply
        </button>
      </form>
      <div className='my-[20px] h-[1px] w-full bg-gray-300' />
      <p className='py-[10px] font-normal text-sm'>Rating</p>
      <ul>
        <li>
          <Link to='' className='ml-3 flex gap-1'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg key={index} viewBox='0 0 9.5 8' className='h-[14px]'>
                  <defs>
                    <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                      <stop offset={0} stopColor='#ffca11' />
                      <stop offset={1} stopColor='#ffad27' />
                    </linearGradient>
                    <polygon
                      id='ratingStar'
                      points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                    />
                  </defs>
                  <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                    <g transform='translate(-876 -1270)'>
                      <g transform='translate(155 992)'>
                        <g transform='translate(600 29)'>
                          <g transform='translate(10 239)'>
                            <g transform='translate(101 10)'>
                              <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              ))}
          </Link>
        </li>
        <li className='mt-3'>
          <Link to='' className='ml-3 flex gap-1'>
            {Array(5)
              .fill(0)
              .map((_, index) => {
                if (index !== 4) {
                  return (
                    <svg key={index} viewBox='0 0 9.5 8' className='h-[14px]'>
                      <defs>
                        <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
                          <stop offset={0} stopColor='#ffca11' />
                          <stop offset={1} stopColor='#ffad27' />
                        </linearGradient>
                        <polygon
                          id='ratingStar'
                          points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                        />
                      </defs>
                      <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
                        <g transform='translate(-876 -1270)'>
                          <g transform='translate(155 992)'>
                            <g transform='translate(600 29)'>
                              <g transform='translate(10 239)'>
                                <g transform='translate(101 10)'>
                                  <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  )
                }
                return (
                  <svg key={index} viewBox='0 0 30 30' className='h-[14px]'>
                    <defs>
                      <linearGradient id='star__hollow' x1='50%' x2='50%' y1='0%' y2='99.0177926%'>
                        <stop offset='0%' stopColor='#FFD211' />
                        <stop offset='100%' stopColor='#FFAD27' />
                      </linearGradient>
                    </defs>
                    <path
                      fill='none'
                      fillRule='evenodd'
                      stroke='url(#star__hollow)'
                      strokeWidth={2}
                      d='M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z'
                    />
                  </svg>
                )
              })}
            <span className='text-sm font-medium ml-[5px] text-black/80'>& UP</span>
          </Link>
        </li>
      </ul>
      <div className='my-[10px] h-[1px] w-full bg-gray-300' />
      <button
        type='button'
        className='mt-2.5 w-full uppercase  text-white bg-[#f05d40] hover:opacity-90  font-medium text-sm px-5 py-1.5 '
      >
        CLEAR ALL
      </button>
    </div>
  )
}
