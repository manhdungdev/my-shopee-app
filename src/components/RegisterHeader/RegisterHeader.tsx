import React from 'react'
import shopeeLogo from '../../assets/icon/shopee-logo.svg'

export default function RegisterHeader() {
  return (
    <header className='py-5 bg-white'>
      <div className='w-9/12  mx-auto flex items-center justify-between '>
        <div className='flex items-end gap-3 md:gap-6'>
          <a href='#'>
            <img className='h-8 lg:h-11' src={shopeeLogo} alt='' />
          </a>
          <p className='text-[#222] text-xl md:text-2xl lg:text-[26px] md:leading-7 md:leading-8 font-medium'>Sign In</p>
        </div>
        <a href='https://help.shopee.vn/portal/4' className='text-[#ee4d2d] text-sm'>
          Need help?
        </a>
      </div>
    </header>
  )
}
