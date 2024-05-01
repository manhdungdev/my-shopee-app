import { profile } from 'console'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { path } from '~/constants/path'
import { AppContext } from '~/contexts/app.contexts'
import { getUrlAvatar } from '~/utils/utils'

export default function AsideUserNav() {
  const { profile } = useContext(AppContext)
  return (
    <div>
      <div className='flex items-center gap-4 my-4'>
        <div className='h-[50px] w-[50px] rounded-full flex items-center justify-center border-2 border-solid border-black/10'>
          {profile?.avatar ? (
            <img src={getUrlAvatar(profile.avatar)} alt='' className='w-full h-full object-cover rounded-full' />
          ) : (
            <svg
              enableBackground='new 0 0 15 15'
              viewBox='0 0 15 15'
              className='shopee-svg-icon icon-headshot'
              height='24px'
              width='24px'
              stroke='#c6c6c6'
            >
              <g>
                <circle cx='7.5' cy='4.5' fill='none' r='3.8' strokeMiterlimit='{10}' />
                <path
                  d='m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6'
                  fill='none'
                  strokeLinecap='round'
                  strokeMiterlimit='{10}'
                />
              </g>
            </svg>
          )}
        </div>
        <div>
          <p className='font-semibold text-[#333] text-sm truncate'>manhdungakp</p>
          <Link to={path.profile} className='mt-1 flex items-center gap-1 text-[#888] text-sm'>
            <svg
              width={12}
              height={12}
              viewBox='0 0 12 12'
              xmlns='http://www.w3.org/2000/svg'
              style={{ marginRight: 4 }}
            >
              <path
                d='M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48'
                fill='#9B9B9B'
                fillRule='evenodd'
              />
            </svg>
            Edit profile
          </Link>
        </div>
      </div>
      <div className='flex flex-col gap-6 mt-10'>
        <Link to={path.profile} className='flex items-center gap-3 hover:text-[#ee4d2d] text-sm'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' height='20px' width='20px'>
            <path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z' />
          </svg>
          My Profile
        </Link>
        <Link to={path.changePassword} className='flex items-center gap-3 hover:text-[#ee4d2d] text-sm'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' height='20px' width='20px'>
            <path d='M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z' />
          </svg>
          Change password
        </Link>
        <Link to={path.historyPurchase} className='flex items-center gap-3 hover:text-[#ee4d2d] text-sm'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' height='20px' width='20px'>
            <path d='M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z' />
          </svg>
          My Purchases
        </Link>
      </div>
    </div>
  )
}
