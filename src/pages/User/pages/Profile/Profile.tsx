import React from 'react'
import InputNumber from '~/components/InputNumber'

export default function Profile() {
  return (
    <div className='bg-white pt-5 pb-12 px-8'>
      <h1 className='text-xl font-semibold text-[#111]'>My Profile</h1>
      <p className='mt-3 text-sm'>Manage and protect your account</p>
      <div className='h-[1px] w-full bg-[#d5d4d4] my-8 '></div>
      <form className='grid grid-cols-12 items-center'>
        <div className='col-span-8'>
          <div className='flex flex-col gap-7 pr-[50px] border-r-2 border-solid border-[#efefef]  text-sm text-[#555555cc]'>
            <div className='flex items-center gap-5'>
              <p className='text-right w-[30%]'>Username</p>
              <p>manhdungakp</p>
            </div>
            <div className='flex items-center gap-5'>
              <span className='text-right w-[30%]'>Name</span>
              <div className='flex-1'>
                <input
                  type='text'
                  className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm p-2 lg:p-2.5 '
                  required
                  autoFocus
                />
                <p className=' mt-1 min-h-5 text-sm font-medium text-red-500'>{}</p>
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <p className='text-right w-[30%]'>Email</p>
              <p>manhdung18102003@gmail.com</p>
            </div>
            <div className='flex items-center gap-5'>
              <span className='text-right w-[30%]'>Phone</span>

              <div className='flex-1'>
                {' '}
                <InputNumber className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm  p-2 lg:p-2.5 ' />
              </div>
              {/* <p className=' mt-1 min-h-5 text-sm font-medium text-red-500'>{}</p> */}
            </div>
            <div className='flex items-center gap-5'>
              <span className='text-right w-[30%]'>Address</span>
              <div className='flex-1'>
                <div className='flex-1'>
                  <input
                    type='text'
                    className='w-full flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm  p-2 lg:p-2.5 '
                    required
                  />
                  <p className=' mt-1 min-h-5 text-sm font-medium text-red-500'>{}</p>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <p className='text-right w-[30%]'>Date of birth</p>
              <div className='flex justify-between flex-1 gap-6'>
                <select className='flex-1 rounded-sm border border-solid border-black/30 px-3 py-2'>
                  <option value=''>Day</option>
                </select>
                <select className='flex-1 rounded-sm border border-solid border-black/30 px-3 py-2'>
                  <option value=''>Month</option>
                </select>
                <select className='flex-1 rounded-sm border border-solid border-black/30 px-3 py-2'>
                  <option value=''>Year</option>
                </select>
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <p className='text-right w-[30%]'></p>
              <button
                type='submit'
                className=' w-[80px] px-4 py-2 bg-[#ee4d2d] rounded-sm text-sm font-normal text-white hover:opacity-90'
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <div className='col-span-4'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='h-[100px] w-[100px] rounded-full flex items-center justify-center border-2 border-solid border-black/10'>
              <svg
                enable-background='new 0 0 15 15'
                viewBox='0 0 15 15'
                x='0'
                y='0'
                className='shopee-svg-icon icon-headshot'
                height='50px'
                width='50px'
                stroke='#c6c6c6'
              >
                <g>
                  <circle cx='7.5' cy='4.5' fill='none' r='3.8' stroke-miterlimit='10'></circle>
                  <path
                    d='m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6'
                    fill='none'
                    stroke-linecap='round'
                    stroke-miterlimit='10'
                  ></path>
                </g>
              </svg>
            </div>
            <div className=''>
              <input className='hidden' type='file' accept='.jpg,.jpeg,.png'></input>
              <button
                type='button'
                className='py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:opacity-90'
              >
                Select image
              </button>
            </div>
            <div className='text-left'>
              <p className='text-sm text-[#999]'>File size: maximum 1 MB</p>
              <p className='text-sm text-[#999] mt-2'>File extension: .JPEG, .PNG</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
