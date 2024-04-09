import React from 'react'
import shopeeBg from '../../assets/img/login/login-bg.png'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='bg-[#ee4e2e] py-[60px] md:pb-[150px]'>
      <div className=' md:w-11/12 lg:w-8/12 mx-auto flex items-center justify-center md:relative'>
        <img className='hidden md:block md:h-[300px] lg:h-[482px]' src={shopeeBg} alt='' />
        <div className='md:absolute max-w-[300px] md:top-[-5%] md:right-[7%] lg:right-0 lg:top-11 w-full lg:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow p-6 lg:p-8 '>
          <form className='space-y-4' action='#'>
            <h5 className='text-xl font-medium text-gray-900 '>Sign up </h5>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 '>
                Your email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-2.5 '
                placeholder='Email'
                required
                autoFocus
              />
            </div>
            <div>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 '>
                Your password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-2.5 '
                required
              />
            </div>

            <div>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 '>
                Confirm your password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-2.5 '
                required
              />
            </div>
            {/* <div className='flex items-start'>
          <div className='flex items-start'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                type='checkbox'
                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                required
              />
            </div>
            <label htmlFor='remember' className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Remember me
            </label>
          </div>
          <a href='#' className='ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500'>
            Lost Password?
          </a>
        </div> */}
            <button
              type='submit'
              className='w-full text-white bg-[#ee4d2db3] uppercase hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 lg:py-3 text-center '
            >
              LOG IN
            </button>
            <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
              Have an account?{' '}
              <Link to='/login' className='text-red-500 hover:underline dark:text-blue-500'>
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
