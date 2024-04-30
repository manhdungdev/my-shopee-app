import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import AsideUserNav from '~/pages/User/components/AsideUserNav'

export default function UserLayout() {
  return (
    <div>
      <AsideUserNav />
      <Outlet />
    </div>
  )
}
