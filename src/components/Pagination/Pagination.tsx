import React from 'react'

interface Props {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number
}

const RANGE = 2

export default function Pagination({ page, pageSize, setPage }: Props) {
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
          <button key={currentPage} className=' px-5 h-9 bg-white'>
            ...
          </button>
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
          <button
            key={currentPage}
            onClick={() => setPage(currentPage)}
            className={` font-light text-xl px-5 py-1  ${currentPage === page ? 'bg-red-500 text-white' : 'bg-white text-black/40'}`}
          >
            {currentPage}
          </button>
        )
      })
  }
  return (
    <div className='flex items-center justify-center gap-5 mt-10'>
      <button className=' px-5 py-2.5 bg-white'>Prev</button>
      {renderPagination()}
      <button className=' px-5 py-2.5 bg-white'>Next</button>
    </div>
  )
}
