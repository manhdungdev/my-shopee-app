import React from 'react'
import shopeeLogo from '../../assets/icon/shopee-logo.svg'

export default function RegisterHeader() {
  return (
    <header className='py-5 bg-white'>
      <div className='w-9/12  mx-auto flex items-center justify-between '>
        <div className='flex items-end gap-6'>
          <a href='#'>
            <img className='h-8 lg:h-11' src={shopeeLogo} alt='' />
          </a>
          <p className='text-[#222] text-lg md:text-[26px] leading-[30px] font-medium'>Đăng ký</p>
        </div>
        <a href='https://help.shopee.vn/portal/4' className='text-[#ee4d2d] text-sm'>
          Hỗ trợ?
        </a>
      </div>
    </header>
  )
}
