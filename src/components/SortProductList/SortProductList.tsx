import React from 'react'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { path } from '~/constants/path'
import { sortBy } from '~/constants/product'
import { ProductConfig } from '~/types/product.type'
import { order as orderConstant } from '~/constants/product'
import { omit } from 'lodash'
import { QueryConfig } from '~/hooks/useQueryConfig'

interface Props {
  queryConfig: QueryConfig
  pageSize: number
}

export default function SortProductList({ queryConfig, pageSize }: Props) {
  const { sort_by, order } = queryConfig
  const page = Number(queryConfig.page)
  const navigate = useNavigate()

  const isActiveSortBy = (sortByValue: Exclude<ProductConfig['sort_by'], undefined>) => sortByValue === sort_by

  const handleSort = (sortByValue: Exclude<ProductConfig['sort_by'], undefined>) => {
    navigate({
      pathname: path.home,
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sort_by: sortByValue
          },
          ['order']
        )
      ).toString()
    })
  }

  const handleSortPrice = (orderValue: string) => {
    if (orderValue) {
      navigate({
        pathname: path.home,
        search: createSearchParams({
          ...queryConfig,
          order: orderValue,
          sort_by: sortBy.price
        }).toString()
      })
    } else {
      navigate({
        pathname: path.home,
        search: createSearchParams(
          omit(
            {
              ...queryConfig
            },
            ['order', 'sort_by']
          )
        ).toString()
      })
    }
  }

  return (
    <div className='flex items-center justify-between py-3 px-5 bg-[#00000008] rounded-sm'>
      <div className='flex items-center gap-3'>
        <span className='text-[#555] text-sm font-normal'>Sort by</span>
        <button
          className={`flex items-center justify-center  hover:opacity-90  font-medium text-sm px-5 py-1.5 ${isActiveSortBy(sortBy.view) ? 'text-white bg-[#f05d40]' : 'bg-white text-black/80'}`}
          onClick={() => handleSort(sortBy.view)}
        >
          Popular
        </button>
        <button
          className={`flex items-center justify-center  hover:opacity-90  font-medium text-sm px-5 py-1.5 ${isActiveSortBy(sortBy.createdAt) ? 'text-white bg-[#f05d40]' : 'bg-white text-black/80'}`}
          onClick={() => handleSort(sortBy.createdAt)}
        >
          Latest
        </button>
        <button
          className={`flex items-center justify-center  hover:opacity-90  font-medium text-sm px-5 py-1.5 ${isActiveSortBy(sortBy.sold) ? 'text-white bg-[#f05d40]' : 'bg-white text-black/80'}`}
          onClick={() => handleSort(sortBy.sold)}
        >
          Top sales
        </button>

        <select
          value={order || ''}
          className={`w-[200px] py-1.5 px-2 text-sm font-normal  cursor-pointer ${isActiveSortBy(sortBy.price) ? 'text-red-500' : 'text-black/80'}`}
          onChange={(event) => handleSortPrice(event.target.value)}
        >
          <option className='text-black' value=''>
            Price
          </option>
          <option className='text-black' value={orderConstant.asc}>
            Price: Low to High
          </option>
          <option className='text-black' value={orderConstant.desc}>
            Price: High to Low
          </option>
        </select>
      </div>

      <div className='flex items-center gap-5'>
        <p className='text-black/80 text-sm'>
          <span className='text-[#ee4d2d]'>{page}</span>/<span>{pageSize}</span>
        </p>
        <div className='flex items-center'>
          <Link
            to={{
              pathname: path.home,
              search: createSearchParams({ ...queryConfig, page: (page - 1).toString() }).toString()
            }}
            className='flex items-center justify-center text-gray-900 bg-transparent border border-solid border-gray-300  hover:bg-white  font-medium rounded-sm text-sm p-3 duration-200 ease-in-out'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' height='10px'>
              <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
            </svg>
          </Link>
          <Link
            to={{
              pathname: path.home,
              search: createSearchParams({ ...queryConfig, page: (page + 1).toString() }).toString()
            }}
            className='flex items-center justify-center text-gray-900 bg-transparent border border-solid border-gray-300  hover:bg-white  font-medium rounded-sm text-sm p-3 duration-200 ease-in-out'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' height='10px'>
              <path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
