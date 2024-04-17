import React from 'react'
import shopeeLogo from '../../assets/icon/shopee-logo.svg'
import { Link, useMatch } from 'react-router-dom'
import { path } from '~/constants/path'

export default function RegisterHeader() {
  const matchRegister = useMatch('/register')
  const isMatchRegister = Boolean(matchRegister)
  return (
    <header className='py-5 bg-white'>
      <div className='w-9/12  mx-auto flex items-center justify-between '>
        <div className='flex items-end gap-3 md:gap-6'>
          <Link to={path.home}>
            <img className='h-8 lg:h-11' src={shopeeLogo} alt='' />
          </Link>
          <p className='text-[#222] text-xl md:text-2xl lg:text-[26px] md:leading-7 md:leading-8 font-medium'>
            {isMatchRegister ? 'Sign up' : 'Sign In'}
          </p>
        </div>
        <a href='https://help.shopee.vn/portal/4' className='text-[#ee4d2d] text-sm'>
          Need help?
        </a>
      </div>
    </header>
  )
}
