import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='flex h-screen w-full items-center justify-center border-b-4 border-solid border-red-500 bg-[#f5f5f5] px-16 md:px-0'>
      <div className='flex flex-col items-center justify-center rounded-lg  px-4 py-8 shadow-2xl md:px-8 lg:px-24'>
        <p className='text-6xl font-bold tracking-wider text-gray-300 md:text-7xl lg:text-9xl'>404</p>
        <p className='mt-4 text-2xl font-bold tracking-wider text-gray-500 md:text-3xl lg:text-5xl'>Page Not Found</p>
        <p className='mt-4 border-b-2 pb-4 text-center text-gray-500'>
          Sorry, the page you are looking for could not be found.
        </p>
        <Link
          to='/'
          className='mt-6 flex items-center space-x-2 rounded bg-blue-600 px-4 py-2 text-gray-100 transition duration-150 hover:bg-blue-700'
          title='Return Home'
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z'
              clipRule='evenodd'
            />
          </svg>
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  )
}
