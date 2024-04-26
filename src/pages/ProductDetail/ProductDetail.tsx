import { useQuery } from '@tanstack/react-query'
import DOMPurify from 'dompurify'
// import DOMPurify from 'dompurify'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import productApi from '~/apis/product.api'
import InputNumber from '~/components/InputNumber'
import ProductRating from '~/components/ProductRating'
import { Product } from '~/types/product.type'
import { formatCurreny, formatCurrenyToSocialStyle, getIdFromUrl, saleRating } from '~/utils/utils'

export default function ProductDetail() {
  const { nameId } = useParams()
  const id = getIdFromUrl(nameId as string)

  const productDetailData = useQuery({
    queryKey: ['productDetail', id],
    queryFn: () => productApi.getProductDetail(id as string)
  })
  const product = productDetailData.data?.data.data

  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const [activeImage, setActiveImage] = useState('')
  const currentImages = useMemo(
    () => (product ? product.images.slice(...currentIndexImages) : []),
    [product, currentIndexImages]
  )
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (product && product.images.length > 0) {
      setActiveImage(product.images[0])
    }
  }, [product])

  const changeActiveImage = (img: string) => setActiveImage(img)
  const next = () => {
    if (currentIndexImages[1] < (product as Product).images.length) {
      setCurrentIndexImages((prev) => [prev[0] + 1, prev[1] + 1])
    }
  }

  const prev = () => {
    if (currentIndexImages[0] > 0) {
      setCurrentIndexImages((prev) => [prev[0] - 1, prev[1] - 1])
    }
  }

  const handleZoom = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const image = imageRef.current as HTMLImageElement
    const { naturalHeight, naturalWidth } = image
    const { offsetX, offsetY } = event.nativeEvent
    const rect = event.currentTarget.getBoundingClientRect()

    const left = offsetX * (1 - naturalWidth / rect.width) + 'px'
    const top = offsetY * (1 - naturalHeight / rect.height) + 'px'

    image.style.width = naturalHeight + 'px'
    image.style.height = naturalWidth + 'px'
    image.style.maxWidth = 'initial'

    image.style.top = top
    image.style.left = left
  }

  const removeHandleZoom = () => {
    ;(imageRef.current as HTMLImageElement).removeAttribute('style')
  }

  if (!product) return null
  return (
    <div className='bg-[#f5f5f5] pt-[30px] pb-[60px] border-b-4 border-solid border-[#ee4d2d]'>
      <div className='w-11/12 md:w-10/12 mx-auto'>
        <div className='grid grid-cols-12 gap-4 p-6 bg-white rounded-sm'>
          <div className='col-span-5'>
            <div
              className='relative w-full pt-[100%] overflow-hidden hover:cursor-zoom-in'
              onMouseMove={handleZoom}
              onMouseLeave={removeHandleZoom}
            >
              <img
                className='absolute w-full h-full top-0 left-0 pointer-events-none'
                src={activeImage}
                alt=''
                ref={imageRef}
              />
            </div>
            <div className='relative grid grid-cols-5 gap-1 mt-3'>
              {currentIndexImages[0] !== 0 && (
                <button
                  className='z-10 absolute top-1/2 -translate-y-1/2 -translate-x-1/2  left-0 p-2 flex items-center rounded-full bg-[#dadada] '
                  onClick={prev}
                >
                  <svg fill='white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' height='20px' width='20px'>
                    <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
                  </svg>
                </button>
              )}
              {currentImages.map((img, index) => {
                const isActive = img === activeImage
                return (
                  <div key={index} className='relative w-full pt-[100%]' onMouseEnter={() => changeActiveImage(img)}>
                    <img className='absolute w-full h-full top-0 left-0' src={img} alt='' />
                    {isActive && <div className='absolute inset-0 border-2 border-solid border-red-500'></div>}
                  </div>
                )
              })}
              {currentIndexImages[1] !== product.images.length && (
                <button
                  className='z-10 absolute top-1/2 -translate-y-1/2 translate-x-1/2 right-0 p-2 flex items-center rounded-full bg-[#dadada]'
                  onClick={next}
                >
                  <svg fill='white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' height='20px' width='20px'>
                    <path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div className='col-span-7'>
            <div className='p-5'>
              <p className='text-black/80 font-medium text-xl uppercase'>{product.name}</p>
              <div className='flex items-center mt-[10px]'>
                <div className='flex items-center gap-2'>
                  <span className='text-[#d0011b] underline underline-offset-2 font-normal'>{product.rating}</span>
                  <ProductRating rating={product.rating} classNameCustom='h-3 fill-[#d0011b]' />
                </div>
                <span className='w-[1px] h-6 bg-slate-300 mx-4'></span>
                <p className='flex items-center'>
                  <span>{formatCurrenyToSocialStyle(product.sold)}</span>
                  <span className='text-[#767676] text-sm ml-[6px]'>Sold</span>
                </p>
              </div>
              <div className='py-4 px-5 mt-[10px] flex items-center gap-5 bg-[#fafafa]'>
                <p className='relative flex items-center text-[#929292] before:absolute before:left-0 before:w-full before:h-[2px] before:bg-[#929292]'>
                  <span className='text-xs underline underline-offset-1 mr-[2px]'>đ</span>
                  <span>{formatCurreny(product.price_before_discount)}</span>
                </p>
                <p className='relative flex items-center text-[#d0011b] font-medium'>
                  <span className='text-xl  underline underline-offset-1 mr-[2px]'>đ</span>
                  <span className='text-3xl  leading-9'>{formatCurreny(product.price)}</span>
                </p>
                <span className='p-1 bg-[#d0011b] text-white uppercase text-xs font-semibold rounded-sm'>
                  {saleRating(product.price_before_discount, product.price)}
                  <span> OFF</span>
                </span>
              </div>
              <div className='flex items-center gap-10 mt-6'>
                <span className='text-sm font-normal text-[#757575]'>Quantity</span>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center '>
                    <button className='bg-transparent h-8 px-3 flex items-center border border-solid border-black/10'>
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' height='10px'>
                        <path d='M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z' />
                      </svg>
                    </button>
                    <InputNumber
                      value={1}
                      classNameInput='border border-solid border-black/10 px-3 w-[52px] h-8 text-center'
                    />
                    <button className='bg-transparent h-8 px-3 flex items-center border border-solid border-black/10'>
                      <svg height='10px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                        <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
                      </svg>
                    </button>
                  </div>
                  <span className='text-[#757575] text-sm'>{product.quantity} pieces available</span>
                </div>
              </div>
              <div className='flex items-center mt-6 gap-4'>
                <button className='flex items-center justify-center gap-3 border border-solid border-[#d0011b] bg-[#fbebed] text-[#d0011b] hover:opacity-80 w-[180px] h-[48px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' height='20px' width='20px' fill='red'>
                    <path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z' />
                  </svg>
                  <span className='text-sm '>Add to cart</span>
                </button>
                <button className='text-sm bg-[#d0011b] text-[#d0011b] text-white hover:opacity-80 w-[180px] h-[48px]'>
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=' p-6 bg-white rounded-sm mt-6'>
          <div className='py-4 px-5 mb-8 bg-[#fafafa] text-[18px]'>
            <p>Product Description</p>
          </div>
          <div
            className='mx-4 text-sm leading-loose'
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.description)
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
