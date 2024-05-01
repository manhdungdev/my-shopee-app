import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import userApi from '~/apis/user.api'
import InputNumber from '~/components/InputNumber'
import { UserSchema, userSchema } from '~/utils/rules'
import DateSelect from '../../components/DateSelect'
import { toast } from 'react-toastify'
import { AppContext } from '~/contexts/app.contexts'
import { setProfileToLS } from '~/utils/auth'

type FormData = Pick<UserSchema, 'name' | 'address' | 'avatar' | 'date_of_birth' | 'phone'>
const profileSchema = userSchema.pick(['address', 'avatar', 'date_of_birth', 'phone', 'name'])

export default function Profile() {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    watch,
    setValue
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      avatar: '',
      date_of_birth: new Date(1990, 0, 1)
    },
    resolver: yupResolver(profileSchema)
  })

  const { setProfile } = useContext(AppContext)
  const { data: profileData, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: userApi.getProfile
  })

  const updateProfileMutation = useMutation({
    mutationFn: userApi.updateProfile
  })

  const profile = profileData?.data.data

  useEffect(() => {
    if (profile) {
      setValue('name', profile.name)
      setValue('address', profile.address)
      setValue('avatar', profile.avatar)
      setValue('phone', profile.phone)
      setValue('date_of_birth', profile.date_of_birth ? new Date(profile.date_of_birth) : new Date(1990, 0, 1))
    }
  }, [profile, setValue])

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    // const res = await updateProfileMutation.mutateAsync({ ...data, date_of_birth: data.date_of_birth?.toISOString() })
    // console.log(res)
    // setProfile(res.data.data)
    // setProfileToLS(res.data.data)
    // refetch()
    // toast.success(res.data.message, {
    //   position: 'top-center',
    //   autoClose: 2000
    // })
  })

  return (
    <div className='bg-white pt-5 pb-12 px-8'>
      <h1 className='text-xl font-semibold text-[#111]'>My Profile</h1>
      <p className='mt-3 text-sm'>Manage and protect your account</p>
      <div className='h-[1px] w-full bg-[#d5d4d4] my-8 '></div>
      <form className='grid grid-cols-12 items-center' onSubmit={onSubmit}>
        <div className='col-span-8'>
          <div className='flex flex-col gap-5 pr-[50px] border-r-2 border-solid border-[#efefef]  text-sm text-[#555555cc]'>
            <div className='flex items-center gap-5'>
              <p className='text-right w-[30%]'>Username</p>
              <p>{profile?.name}</p>
            </div>
            <div>
              <div className='flex items-center gap-5'>
                <span className='text-right w-[30%] shrink-0'>Name</span>
                <input
                  type='text'
                  className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm p-2 lg:p-2.5 '
                  required
                  autoFocus
                  {...register('name')}
                />
              </div>
              <div className='flex items-center gap-5'>
                <span className='text-right w-[30%] shrink-0'></span>
                <p className=' mt-1 min-h-5 text-sm font-medium text-red-500 text-center'>{errors.name?.message}</p>
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <p className='text-right w-[30%]'>Email</p>
              <p>{profile?.email}</p>
            </div>
            <div>
              <div className='flex items-center gap-5'>
                <span className='text-right w-[30%] shrink-0'>Phone</span>{' '}
                <Controller
                  control={control}
                  name='phone'
                  render={({ field }) => (
                    <InputNumber
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm  p-2 lg:p-2.5 '
                      {...field}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
              <div className='flex items-center gap-5'>
                <span className='text-right w-[30%] shrink-0'></span>
                <p className=' mt-1 min-h-5 text-sm font-medium text-red-500 text-center'>{errors.phone?.message}</p>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-5'>
                <span className='text-right w-[30%] shrink-0'>Address</span>
                <input
                  type='text'
                  className='w-full flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm  p-2 lg:p-2.5 '
                  required
                  {...register('address')}
                />
              </div>
              <div className='flex items-center gap-5'>
                <span className='text-right w-[30%] shrink-0'></span>
                <p className=' mt-1 min-h-5 text-sm font-medium text-red-500 text-center'>{errors.address?.message}</p>
              </div>
            </div>
            <Controller
              control={control}
              name='date_of_birth'
              render={({ field }) => (
                <DateSelect
                  errorMessage={errors.date_of_birth?.message}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <div className='flex items-center gap-5'>
              <p className='text-right w-[30%]'></p>
              <button
                type='submit'
                className=' w-[80px] px-4 py-2 bg-[#ee4d2d] rounded-sm text-sm font-normal text-white hover:opacity-90'
              >
                Save
              </button>
            </div>
          </div>
        </div>

        <div className='col-span-4'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='h-[100px] w-[100px] rounded-full flex items-center justify-center border-2 border-solid border-black/10'>
              <svg
                enableBackground='new 0 0 15 15'
                viewBox='0 0 15 15'
                className='shopee-svg-icon icon-headshot'
                height='50px'
                width='50px'
                stroke='#c6c6c6'
              >
                <g>
                  <circle cx='7.5' cy='4.5' fill='none' r='3.8' strokeMiterlimit='10'></circle>
                  <path
                    d='m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6'
                    fill='none'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                  ></path>
                </g>
              </svg>
            </div>
            <div className=''>
              <input className='hidden' type='file' accept='.jpg,.jpeg,.png'></input>
              <button
                type='button'
                className='py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:opacity-90'
              >
                Select image
              </button>
            </div>
            <div className='text-left'>
              <p className='text-sm text-[#999]'>File size: maximum 1 MB</p>
              <p className='text-sm text-[#999] mt-2'>File extension: .JPEG, .PNG</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
