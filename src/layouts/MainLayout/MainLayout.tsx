import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
interface Props {
  children?: React.ReactNode
}

function MainLayoutInner({ children }: Props) {
  console.log('Main Layout')
  return (
    <div>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </div>
  )
}

const MainLayout = memo(MainLayoutInner)

export default MainLayout
