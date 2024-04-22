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
import RatingStars from '../RatingStars'
import { omit } from 'lodash'

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

  const handeClearSort = () => {
    navigate({
      pathname: path.home,
     search: createSearchParams(omit(queryConfig, ['price_max', 'price_min', 'rating_filter', 'category'])).toString()
    })
  }

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
      <p className='pt-[10px] font-normal text-sm'>Rating</p>
      <RatingStars queryConfig={queryConfig} />
      <div className='my-[10px] h-[1px] w-full bg-gray-300' />
      <button
      onClick={handeClearSort}
        type='button'
        className='mt-2.5 w-full uppercase  text-white bg-[#f05d40] hover:opacity-90  font-medium text-sm px-5 py-1.5 '
      >
        CLEAR ALL
      </button>
    </div>
  )
}
