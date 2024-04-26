import React, { useContext } from 'react'
import shopeeBg from '../../assets/img/login/login-bg.png'
import { Link } from 'react-router-dom'
import { useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema, schema } from '~/utils/rules'
import { useMutation } from '@tanstack/react-query'
// import authApi from '~/apis/auth.apis'
import { toast } from 'react-toastify'
import { isUnprocessableEntity } from '~/utils/utils'
import { ErrorResponse } from '~/types/utils.type'
import { AppContext } from '~/contexts/app.contexts'
import authApi from '~/apis/auth.api'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])

export default function Login() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const {
    watch,
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: FormData) => authApi.checkLogin(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        // toast.success('Login successfully!')
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
      },
      onError: (error) => {
        if (isUnprocessableEntity<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError?.email) {
            setError('email', {
              message: formError.email,
              type: 'Server'
            })
          }

          if (formError?.password) {
            setError('password', {
              message: formError.password,
              type: 'Server'
            })
          }
        }
      }
    })
  })

  return (
    <div className='bg-[#ee4e2e] py-[60px]'>
      <div className=' md:w-11/12 lg:w-8/12 mx-auto flex items-center justify-center md:relative'>
        <img className='hidden md:block md:h-[300px] lg:h-[482px]' src={shopeeBg} alt='' />
        <div className='md:absolute max-w-[300px] md:top-[-12%] md:right-[7%] lg:right-0 lg:top-11 w-full lg:max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow p-6 lg:p-8 '>
          <form className='space-y-4' action='#' onSubmit={onSubmit} noValidate>
            <h5 className='text-xl font-medium text-gray-900 '>Sign in </h5>
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
                autoComplete='on'
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
                autoComplete='on'
                {...register('password')}
              />
              <p className=' mt-1 min-h-5 text-sm font-medium text-red-500'>{errors.password?.message || ''}</p>
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
              disabled={loginMutation.isPending}
              className={`flex items-center justify-center gap-2 w-full text-white bg-[#ee4d2db3] uppercase hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 lg:py-3 text-center ${loginMutation.isPending ? 'cursor-not-allowed' : ''}`}
            >
              {loginMutation.isPending && (
                <svg
                  aria-hidden='true'
                  className='w-3 h-3 text-gray-200 animate-spin fill-white'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                  />
                </svg>
              )}
              LOG IN
            </button>
            <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
              Not registered?{' '}
              <Link to='/register' className='text-red-500 hover:underline dark:text-blue-500'>
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
