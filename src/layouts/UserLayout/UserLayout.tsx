import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import AsideUserNav from '~/pages/User/components/AsideUserNav'

export default function UserLayout() {
  return (
    <div>
      <div className='bg-[#f5f5f5] pt-5 pb-[60px] border-b-4 border-solid border-[#ee4d2d]'>
        <div className='w-11/12 md:w-10/12 mx-auto grid grid-cols-12 gap-6'>
          <div className='col-span-2'>
            <AsideUserNav />
          </div>
          <div className='col-span-10'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
