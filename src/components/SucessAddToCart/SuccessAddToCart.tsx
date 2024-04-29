import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function SuccessAddToCart({
  isOpen,
  resetStateIsOpen
}: {
  isOpen: boolean
  resetStateIsOpen: () => void
}) {
  const [isVisible, setIsVisible] = useState(isOpen)
  useEffect(() => {
    let timeOut = undefined
    if (isOpen) {
      setIsVisible(true)
      timeOut = setTimeout(() => {
        setIsVisible(false)
        resetStateIsOpen()
      }, 2000)
    }
    return () => {
      clearTimeout(timeOut)
    }
  }, [isOpen, resetStateIsOpen])
  return createPortal(
    <div
      className={` fixed inset-0 m-auto flex flex-col items-center justify-center bg-black/65 w-[450px] h-[200px] p-5 ease-linear duration-100  ${isVisible ? ' opacity-100 visible' : ' opacity-0 invisible'}`}
    >
      <div className='rounded-full w-[60px] h-[60px] flex items-center justify-center bg-[#01c0a2] '>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='white' height='32px'>
          <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
        </svg>
      </div>
      <p className='mt-6 text-xl  text-white'>Item has been added to your shopping cart</p>
    </div>,
    document.body
  )
}
