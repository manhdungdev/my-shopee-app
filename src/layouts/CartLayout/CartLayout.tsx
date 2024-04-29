import React from 'react'
import CartHeader from '~/components/CartHeader'
import Footer from '~/components/Footer'

interface Props {
  children: React.ReactNode
}

export default function CartLayout({ children }: Props) {
  return (
    <div>
      <CartHeader />
      {children}
      <Footer />
    </div>
  )
}
