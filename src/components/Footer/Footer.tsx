import React, { useState } from 'react'
import { brands } from './brands'
import facebook from '../../assets/icon/footer-contact/facebook.svg'
import instagram from '../../assets/icon/footer-contact/instagram.svg'
import linkedin from '../../assets/icon/footer-contact/linkedin.svg'
import qrCode from '../../assets/img/footer-infor/qr-code.png'
import appStore from '../../assets/img/footer-infor/app-store.png'
import googlePlay from '../../assets/img/footer-infor/google-play.png'
import gallery from '../../assets/img/footer-infor/gallery.png'

const brandsVal = brands

export default function Footer() {
  const [urlList, setUrlList] = useState(brandsVal)
  return (
    <footer className='pt-11 pb-4  md:pb-9 bg-[#f5f5f5]'>
      <div className=' w-10/12 md:w-9/12 mx-auto'>
        <div className='  grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 md:gap-6 lg:gap-3'>
          <div className='col-span-2'>
            <p className='uppercase text-[#000000de] font-bold text-xs mb-5 whitespace-nowrap'>CUSTOMER SERVICE</p>
            <ul>
              <li className='footer__item'>
                <a href='#!'>Help Centre</a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Shopee Blog</a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Shopee Mall</a>
              </li>
              <li className='footer__item'>
                <a href='#!'>How To Buy</a>
              </li>
              <li className='footer__item'>
                <a href='#!'>How To Sell</a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Payment</a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Shopee Coins</a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Shipping</a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Return & Refund</a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Contact Us</a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Warranty Policy</a>
              </li>
            </ul>
          </div>
          <div className='col-span-2'>
            <p className='uppercase text-[#000000de] font-bold text-xs mb-5 whitespace-nowrap'>ABOUT SHOPEE</p>
            <ul>
              <li className='footer__item'>
                <a href='#!'>About Us </a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Shopee Careers </a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Shopee Policies </a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Privacy Policy </a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Shopee Mall </a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Seller Centre </a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Flash Deals </a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Shopee Ambassador Programme </a>
              </li>
              <li className='footer__item'>
                <a href='#!'>Media Contact </a>
              </li>
            </ul>
          </div>
          <div className='col-span-4 md:col-span-2 '>
            <div className='mb-4'>
              <p className='uppercase text-[#000000de] font-bold text-xs mb-5 whitespace-nowrap'>PAYMENT</p>
              <div className='grid grid-cols-footer-brands gap-2 '>
                {brands.payment.map((payment) => (
                  <div className='col flex items-center justify-center  p-2 bg-white rounded'>
                    <img src={payment.url} alt='' />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className='uppercase text-[#000000de] font-bold text-xs mb-5 whitespace-nowrap'>LOGISTIC</p>
              <div className='grid grid-cols-footer-brands gap-2 '>
                {brandsVal.logistics.map((logistic) => (
                  <div className='col flex items-center justify-center  p-2 bg-white rounded'>
                    <img src={logistic.url} alt='' />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <p className='uppercase text-[#000000de] font-bold text-xs mb-5 whitespace-nowrap'>FOLLOW US</p>
            <div className='flex flex-col gap-3'>
              <a href='https://www.facebook.com/ShopeeVN'>
                <div className='inline-flex group  items-center gap-2'>
                  <img className='h-4' src={facebook} alt='' />
                  <span className='text-[#000000a6] group-hover:text-[#ee4d2d] text-xs'>Facebook</span>
                </div>
              </a>
              <a href='https://www.instagram.com/Shopee_VN/'>
                <div className='group inline-flex items-center gap-2'>
                  <img className='h-4' src={instagram} alt='' />
                  <span className='text-[#000000a6] group-hover:text-[#ee4d2d] text-xs'>Instagram</span>
                </div>
              </a>
              <a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHPEvDjG9YWKgAAAY69Yf9gIvfxqABAQQ0RX2t9Z1uQqHWbsYTezpWBfoSYwLOxqKCwF1fo7_nvo151R4GNbtBHUQKulbl1QDv2R9uTBPGudS1iByfybUQ7ZzBlQkMC1R6ZOrc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fshopee'>
                <div className='group inline-flex items-center gap-2'>
                  <img className='h-4' src={linkedin} alt='' />
                  <span className='text-[#000000a6] group-hover:text-[#ee4d2d] text-xs'>Linkedin</span>
                </div>
              </a>
            </div>
          </div>
          <div className='col-span-2 '>
            <div className='ml-16'>
              <p className='uppercase text-[#000000de] font-bold text-xs mb-5 whitespace-nowrap'>SHOPEE APP DOWNLOAD</p>
              <div className='flex gap-3 '>
                <div className='shrink-0'>
                  <img src={qrCode} alt='' />
                </div>
                <div className='shrink-0 flex flex-col justify-between gap-1'>
                  <a href='https://shopee.vn/web' className='p-1 bg-white rounded-sm shadow-footer-channel'>
                    <img src={appStore} alt='' />
                  </a>
                  <a href='https://shopee.vn/web' className='p-1 bg-white rounded-sm shadow-footer-channel'>
                    <img src={googlePlay} alt='' />
                  </a>
                  <a href='https://shopee.vn/web' className='p-1 bg-white rounded-sm shadow-footer-channel'>
                    <img src={gallery} alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[1px] bg-slate-300 my-10'></div>
        <div className='content text-center lg:text-left'>
          <p className='text-[#0000008a] mt-2 text-sm'>
            Country & Region:
            <span className='inline-flex footer__separate flex-wrap justify-center lg:justify-normal'>
              <a href='#!'>Singapore</a>
              <a href='#!'>Indonesia</a>
              <a href='#!'>Thailand</a>
              <a href='#!'>Malaysia</a>
              <a href='#!'>Vietnam</a>
              <a href='#!'>Philippines</a>
              <a href='#!'>Brazil</a>
              <a href='#!'>México</a>
              <a href='#!'>Colombia</a>
              <a href='#!'>Chile</a>
              <a href='#!'>Taiwan</a>
            </span>
          </p>
          <p className='text-[#0000008a] font-bold text-3xl text-center my-10'>
            Hoàng Mạnh Dũng - Shopee Clone - 2024. All rights reserved.
          </p>
          <div className='flex items-center justify-center footer__separate  text-[#0000008a] text-xs uppercase'>
            <a
              className='!px-1 text-[10px] md:!px-6 whitespace-nowrap'
              href='https://help.shopee.vn/portal/4/article/77244'
            >
              PRIVACY POLICY
            </a>
            <a
              className='!px-1 text-[10px] md:!px-6 whitespace-nowrap'
              href='https://help.shopee.vn/portal/4/article/77245'
            >
              TERM OF SERVICE
            </a>
            <a
              className='!px-1 text-[10px] md:!px-6 whitespace-nowrap'
              href='https://help.shopee.vn/portal/4/article/77250'
            >
              SHIPPING POLICY
            </a>
            <a
              className='!px-1 text-[10px] md:!px-6 whitespace-nowrap'
              href='https://help.shopee.vn/portal/4/article/77251'
            >
              VIOLATION
            </a>
          </div>
          <p className='text-center text-xs text-[#000000a6] mt-3 mb-6'>Shopee Company Limited</p>
          <p className='text-center text-xs text-[#000000a6] mb-3'>
            Floors 4-5-6, Capital Place Building, No. 29, Lieu Giai Street, Ngoc Khanh ward, Ba Dinh District, Hanoi,
            Vietnam
          </p>
          <p className='text-center text-xs text-[#000000a6] mb-3'>
            Person in charge of information management: Nguyen Duc Tri
          </p>
          <p className='text-center text-xs text-[#000000a6] mb-3'>Business Registration Certificate No: 0106773786</p>
          <p className='text-center text-xs text-[#000000a6] mb-3'>
            © 2015 - Copyright belongs to Shopee Company Limited
          </p>
        </div>
      </div>
    </footer>
  )
}
