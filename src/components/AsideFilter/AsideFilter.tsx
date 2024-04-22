import React, { useEffect } from 'react'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { path } from '~/constants/path'
import { QueryConfig } from '~/pages/ProductList/ProductList'
import { Category } from '~/types/category.type'
import { Product } from '~/types/product.type'
import InputNumber from '../InputNumber'
import { Controller, useForm } from 'react-hook-form'
import { Schema, schema } from '~/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { NoUndefinedField } from '~/utils/utils'
import { ObjectSchema } from 'yup'

interface Props {
  queryConfig: QueryConfig
  categories: Category[]
  products: Product[]
}

type FormData = NoUndefinedField<Pick<Schema, 'price_max' | 'price_min'>>

const priceSchema = schema.pick(['price_min', 'price_max'])

export default function AsideFilter({ categories, queryConfig, products }: Props) {
  const navigate = useNavigate()
  const {
    trigger,
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      price_min: '',
      price_max: ''
    },
    resolver: yupResolver<FormData>(priceSchema as ObjectSchema<FormData>),
    shouldFocusError: false
  })

  const onSubmit = handleSubmit(
    (data) => {
      navigate({
        pathname: path.home,
        search: createSearchParams({
          ...queryConfig,
          price_max: data.price_max,
          price_min: data.price_min
        }).toString()
      })
    },
    (err) => {
      console.log(err)
      // err.price_max.ref.focus()
    }
  )

  const value = watch()
  console.log(value)
  const { category } = queryConfig

  useEffect(() => {
    if (products.length === 0) {
      navigate({
        pathname: path.home,
        search: createSearchParams({
          ...queryConfig,
          page: '1'
        }).toString()
      })
    }
  }, [products, navigate, queryConfig])

  // console.log(category, categories)
  return (
    <div>
      <Link to={path.home} className={`flex items-center font-bold  ${!category ? 'text-[#ee4d2d]' : 'text-black/80'}`}>
        <svg viewBox='0 0 12 10' className='h-3 mr-3' fill={`${!category ? '#ee4d2d' : ''}`}>
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
        {categories.map((categoryItem) => {
          const isActive = categoryItem._id === category
          return (
            <li key={categoryItem._id}>
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    category: categoryItem._id
                  }).toString()
                }}
                className={`relative flex items-center px-3 py-2 text-sm ${isActive ? 'text-[#ee4d2d] font-bold' : ''}`}
              >
                {isActive && (
                  <svg viewBox='0 0 4 7' className='absolute left-0 h-2 fill-red-500'>
                    <polygon points='4 3.5 0 0 0 7'></polygon>
                  </svg>
                )}
                <span>{categoryItem.name}</span>
              </Link>
            </li>
          )
        })}
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
      <form action='' className=' mt-[10px] text-sm' onSubmit={onSubmit}>
        <div className='flex justify-between items-center  gap-[10px] '>
          <Controller
            control={control}
            name='price_min'
            render={({ field }) => {
              return (
                <InputNumber
                  type='text'
                  placeholder='₫ MIN'
                  onChange={(event) => {
                    field.onChange(event)
                    trigger('price_max')
                  }}
                  value={field.value}
                  ref={field.ref}
                />
              )
            }}
          />
          <span className='w-[10px] h-[1px] bg-slate-500 block shrink-0'></span>
          <Controller
            control={control}
            name='price_max'
            render={({ field }) => {
              return (
                <InputNumber
                  type='text'
                  placeholder='₫ MAX'
                  onChange={(event) => {
                    field.onChange(event)
                    trigger('price_max')
                  }}
                  value={field.value}
                  ref={field.ref}
                />
              )
            }}
          />
        </div>
        <p className='m-1 min-h-5 text-sm font-medium text-red-500 text-center'>{errors.price_max?.message}</p>
        <button
          type='submit'
          className=' w-full uppercase  text-white bg-[#f05d40] hover:opacity-90  font-medium text-sm px-5 py-1.5 '
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
