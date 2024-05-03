import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import DOMPurify from 'dompurify'
// import DOMPurify from 'dompurify'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productApi from '~/apis/product.api'
import purchasesApi from '~/apis/purchases.api'
import InputNumber from '~/components/InputNumber'
import Product from '~/components/Product'
import ProductRating from '~/components/ProductRating'
import QuantityController from '~/components/QuantityController'
import SuccessAddToCart from '~/components/SucessAddToCart'
import { path } from '~/constants/path'
import { purchasesStatus } from '~/constants/purchase'
import { Product as ProductType, ProductConfig } from '~/types/product.type'
import { formatCurrency, formatCurrencyToSocialStyle, getIdFromUrl, saleRating } from '~/utils/utils'

export default function ProductDetail() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { nameId } = useParams()
  const id = getIdFromUrl(nameId as string)
  

  const productDetailData = useQuery({
    queryKey: ['productDetail', id],
    queryFn: () => productApi.getProductDetail(id as string)
  })
  const product = productDetailData.data?.data.data

  const queryConfig: ProductConfig = { limit: 12, page: 1, category: product?.category._id }
  const products = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => productApi.getProducts(queryConfig),
    enabled: Boolean(product),
    staleTime: 3 * 60 * 1000
  })

  const addToCartMutation = useMutation({
    mutationFn: (body: { product_id: string; buy_count: number }) => purchasesApi.addToCard(body)
  })

  const [buyCount, setBuyCount] = useState(1)
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const [activeImage, setActiveImage] = useState('')
  const [isOpen, setIsOpen] = useState(false)
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
    if (currentIndexImages[1] < (product as ProductType).images.length) {
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

  const changeValue = (value: number) => setBuyCount(value)

  const addToCart = () => {
    addToCartMutation.mutate(
      { product_id: product?._id as string, buy_count: buyCount },
      {
        onSuccess: () => {
          setIsOpen(true)
          queryClient.invalidateQueries({
            queryKey: ['purchases', { status: purchasesStatus.inCart }]
          })
        }
      }
    )
  }

  const resetStateIsOpen = () => {
    setIsOpen(false)
  }

  const buyNow = () => {
    addToCartMutation.mutate(
      { product_id: product?._id as string, buy_count: buyCount },
      {
        onSuccess: (data) => {
          navigate(
            {
              pathname: path.cart
            },
            {
              state: {
                purchaseId: data.data.data._id
              }
            }
          )
        }
      }
    )
  }

  if (!product) return null
  return (
    <div className='border-b-4 border-solid border-[#ee4d2d] bg-[#f5f5f5] pb-[60px] pt-[30px]'>
      <div className='mx-auto w-11/12 md:w-10/12'>
        <div className='grid grid-cols-12 gap-4 rounded-sm bg-white p-6'>
          <div className='col-span-5'>
            <div
              className='relative w-full overflow-hidden pt-[100%] hover:cursor-zoom-in'
              onMouseMove={handleZoom}
              onMouseLeave={removeHandleZoom}
            >
              <img
                className='pointer-events-none absolute left-0 top-0 h-full w-full'
                src={activeImage}
                alt=''
                ref={imageRef}
              />
            </div>
            <div className='relative mt-3 grid grid-cols-5 gap-1'>
              {currentIndexImages[0] !== 0 && (
                <button
                  className='absolute left-0 top-1/2 z-10 flex  -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-[#dadada] p-2 '
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
                    <img className='absolute left-0 top-0 h-full w-full' src={img} alt='' />
                    {isActive && <div className='absolute inset-0 border-2 border-solid border-red-500'></div>}
                  </div>
                )
              })}
              {currentIndexImages[1] !== product.images.length && (
                <button
                  className='absolute right-0 top-1/2 z-10 flex -translate-y-1/2 translate-x-1/2 items-center rounded-full bg-[#dadada] p-2'
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
              <p className='text-xl font-medium uppercase text-black/80'>{product.name}</p>
              <div className='mt-[10px] flex items-center'>
                <div className='flex items-center gap-2'>
                  <span className='font-normal text-[#d0011b] underline underline-offset-2'>{product.rating}</span>
                  <ProductRating rating={product.rating} classNameCustom='h-3 fill-[#d0011b]' />
                </div>
                <span className='mx-4 h-6 w-[1px] bg-slate-300'></span>
                <p className='flex items-center'>
                  <span>{formatCurrencyToSocialStyle(product.sold)}</span>
                  <span className='ml-[6px] text-sm text-[#767676]'>Sold</span>
                </p>
              </div>
              <div className='mt-[10px] flex items-center gap-5 bg-[#fafafa] px-5 py-4'>
                <p className='relative flex items-center text-[#929292] before:absolute before:left-0 before:h-[2px] before:w-full before:bg-[#929292]'>
                  <span className='mr-[2px] text-xs underline underline-offset-1'>đ</span>
                  <span>{formatCurrency(product.price_before_discount)}</span>
                </p>
                <p className='relative flex items-center font-medium text-[#d0011b]'>
                  <span className='mr-[2px]  text-xl underline underline-offset-1'>đ</span>
                  <span className='text-3xl  leading-9'>{formatCurrency(product.price)}</span>
                </p>
                <span className='rounded-sm bg-[#d0011b] p-1 text-xs font-semibold uppercase text-white'>
                  {saleRating(product.price_before_discount, product.price)}
                  <span> OFF</span>
                </span>
              </div>
              <div className='mt-6 flex items-center gap-10'>
                <span className='text-sm font-normal text-[#757575]'>Quantity</span>
                <div className='flex items-center gap-4'>
                  <QuantityController
                    onDecrease={changeValue}
                    onType={changeValue}
                    onIncrease={changeValue}
                    max={product.quantity}
                    value={buyCount}
                  />

                  <span className='text-sm text-[#757575]'>{product.quantity} pieces available</span>
                </div>
              </div>
              <div className='mt-6 flex items-center gap-4'>
                <button
                  className='flex h-[48px] w-[180px] items-center justify-center gap-3 border border-solid border-[#d0011b] bg-[#fbebed] text-[#d0011b] hover:opacity-80'
                  onClick={addToCart}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' height='20px' width='20px' fill='red'>
                    <path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z' />
                  </svg>
                  <span className='text-sm '>Add to cart</span>
                  <SuccessAddToCart isOpen={isOpen} resetStateIsOpen={resetStateIsOpen} />
                </button>
                <button
                  onClick={buyNow}
                  className='h-[48px] w-[180px] bg-[#d0011b] text-sm text-white hover:opacity-80'
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=' mt-6 rounded-sm bg-white p-6'>
          <div className='mb-8 bg-[#fafafa] px-5 py-4 text-[18px]'>
            <p>Product Description</p>
          </div>
          <div
            className='mx-4 text-sm leading-loose'
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.description)
            }}
          ></div>
        </div>
        <p className='mb-5 mt-10 font-medium uppercase text-[#0000008a]'>You may also like</p>
        <div className='mt-6 grid grid-cols-6 gap-3'>
          {products.data &&
            products.data.data.data.products.map((product) => (
              <div className='col' key={product._id}>
                <Product product={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
