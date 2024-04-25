import React from 'react'

export default function ProductRating({
  rating,
  classNameCustom = 'h-3 fill-[yellow]'
}: {
  rating: number
  classNameCustom?: string
}) {
  const handleWidth = (order: number) => {
    if (order <= rating) {
      return '100%'
    }
    if (order > rating && order - rating < 1) {
      return (rating - Math.floor(rating)) * 100 + '%'
    }
    return '0%'
  }
  return (
    <div className='flex gap-1 items-center'>
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className='relative ' key={index}>
            <div
              className='absolute top-0 left-0 h-full overflow-hidden'
              style={{
                width: handleWidth(index + 1)
              }}
            >
              <svg viewBox='0 0 15 15' x='0' y='0' className={classNameCustom}>
                <polygon points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'></polygon>
              </svg>
            </div>
            <svg enableBackground='new 0 0 15 15' viewBox='0 0 15 15' x={0} y={0} className='h-3 w-3' fill='#d0cccc'>
              <polygon points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4' />
            </svg>
          </div>
        ))}
    </div>
  )
}
