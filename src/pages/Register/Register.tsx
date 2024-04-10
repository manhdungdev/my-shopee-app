import React from 'react'
import shopeeBg from '../../assets/img/login/login-bg.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Schema, getRules, schema } from '~/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

type FormState = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormState>({
    resolver: yupResolver(schema)
  })

  const handleSubmitForm = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='bg-[#ee4e2e] py-[60px] md:pb-[150px]'>
      <div className=' md:w-11/12 lg:w-8/12 mx-auto flex items-center justify-center md:relative'>
        <img className='hidden md:block md:h-[300px] lg:h-[482px]' src={shopeeBg} alt='' />
        <div className='md:absolute max-w-[300px] md:top-[-5%] md:right-[7%] lg:right-0 lg:top-11 w-full lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow p-6 lg:p-8 '>
          <form className='space-y-[6px]' action='#' onSubmit={handleSubmitForm} noValidate>
            <h5 className='text-xl font-semibold text-gray-900 mb-5'>Sign up </h5>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 '>
                Your email
              </label>
              <input
                type='email'
                id='email'
                className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-2.5 '
                placeholder='Email'
                required
                autoFocus
                {...register('email')}
              />
              <p className=' mt-1 min-h-5 text-sm font-medium text-red-500'>{errors.email?.message || ''}</p>
            </div>
            <div>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 '>
                Your password
              </label>
              <input
                type='password'
                id='password'
                placeholder='••••••••'
                className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-2.5 '
                required
                {...register('password')}
                autoComplete='on'
              />
              <p className=' mt-1 min-h-5 text-sm font-medium text-red-500'>{errors.password?.message || ''}</p>
            </div>

            <div>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 '>
                Confirm your password
              </label>
              <input
                type='password'
                id='confirm_password'
                placeholder='••••••••'
                className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-2.5 '
                required
                autoComplete='on'
                {...register('confirm_password')}
              />
              <p className=' mt-1 min-h-5 text-sm font-medium text-red-500'>{errors.confirm_password?.message || ''}</p>
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
              className=' w-full text-white bg-[#ee4d2db3] uppercase hover:opacity-90  focus:outline-none font-medium rounded-lg text-sm px-5 py-2 lg:py-3 text-center '
            >
              SIGN UP
            </button>
            <div className='!mt-3 text-sm font-medium text-gray-500 dark:text-gray-300'>
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
