import React from 'react'
import { Link, createSearchParams } from 'react-router-dom'
import { path } from '~/constants/path'
import { QueryConfig } from '~/hooks/useQueryConfig'

interface Props {
  queryConfig: QueryConfig
  pageSize: number
}

const RANGE = 2

export default function Pagination({ queryConfig, pageSize }: Props) {
  const page = Number(queryConfig.page)
  const renderPagination = () => {
    let afterDot = true
    let beforeDot = true

    const renderAfterDot = (currentPage: number) => {
      if (afterDot) {
        afterDot = false
        return (
          <button key={currentPage} className=' px-5 h-9 bg-white'>
            ...
          </button>
        )
      }
      return null
    }

    const renderBeforeDot = (currentPage: number) => {
      if (beforeDot) {
        beforeDot = false
        return (
          <span key={currentPage} className=' px-5 h-9 bg-white'>
            ...
          </span>
        )
      }
      return null
    }

    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const currentPage = index + 1
        if (page <= RANGE * 2 + 1 && currentPage > page + RANGE && currentPage <= pageSize - RANGE) {
          return renderAfterDot(currentPage)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (currentPage > RANGE && currentPage < page - RANGE) {
            return renderBeforeDot(currentPage)
          } else if (currentPage <= pageSize - RANGE && currentPage > page + RANGE) {
            return renderAfterDot(currentPage)
          }
        } else if (page >= pageSize - RANGE * 2 && currentPage > RANGE && currentPage < page - RANGE) {
          return renderBeforeDot(currentPage)
        }

        return (
          <Link
            to={{
              pathname: path.home,
              search: createSearchParams({
                ...queryConfig,
                page: currentPage.toString()
              }).toString()
            }}
            key={currentPage}
            className={` font-light text-xl px-5 py-1  ${currentPage === page ? 'bg-red-500 text-white' : 'bg-white text-black/40 hover:text-red-500'}`}
          >
            {currentPage}
          </Link>
        )
      })
  }
  return (
    <div className='flex items-center justify-center gap-5 mt-10'>
      {page === 1 ? (
        <span className='cursor-not-allowed px-5 py-2.5 bg-white/50'>Prev</span>
      ) : (
        <Link
          to={{
            pathname: path.home,
            search: createSearchParams({
              ...queryConfig,
              page: (page - 1).toString()
            }).toString()
          }}
          className=' px-5 py-2.5 bg-white'
        >
          Prev
        </Link>
      )}
      {renderPagination()}
      {page === pageSize ? (
        <span className='cursor-not-allowed px-5 py-2.5 bg-white/50'>Next</span>
      ) : (
        <Link
          to={{
            pathname: path.home,
            search: createSearchParams({
              ...queryConfig,
              page: (page + 1).toString()
            }).toString()
          }}
          className=' px-5 py-2.5 bg-white'
        >
          Prev
        </Link>
      )}
    </div>
  )
}
