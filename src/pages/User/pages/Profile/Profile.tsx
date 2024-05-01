import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import userApi from '~/apis/user.api'
import InputNumber from '~/components/InputNumber'
import { UserSchema, userSchema } from '~/utils/rules'
import DateSelect from '../../components/DateSelect'
import { toast } from 'react-toastify'
import { AppContext } from '~/contexts/app.contexts'
import { setProfileToLS } from '~/utils/auth'
import avatarUpload from '../../../../assets/icon/user/avatar-upload.svg'
import { getUrlAvatar, isUnprocessableEntity } from '~/utils/utils'
import { ErrorResponse } from '~/types/utils.type'

type FormData = Pick<UserSchema, 'name' | 'address' | 'avatar' | 'date_of_birth' | 'phone'>
type FormDataError = Omit<FormData, 'date_of_birth'> & {
  date_of_birth?: string
}
const profileSchema = userSchema.pick(['address', 'avatar', 'date_of_birth', 'phone', 'name'])

export default function Profile() {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    setError
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
  const [file, setFile] = useState<File>()
  const uploadImageRef = useRef<HTMLInputElement>(null)
  const { data: profileData, refetch } = useQuery({
    queryKey: ['profile'],
    queryFn: userApi.getProfile
  })

  const updateProfileMutation = useMutation({
    mutationFn: userApi.updateProfile
  })

  const uploadAvatarMutation = useMutation({
    mutationFn: userApi.uploadAvatar
  })

  const profile = profileData?.data.data
  const preview = useMemo(() => (file ? URL.createObjectURL(file) : ''), [file])
  const avatar = watch('avatar')
  console.log(avatar)

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
    try {
      let avatarName = avatar
      if (file) {
        const form = new FormData()
        form.append('image', file)
        const uploadRes = await uploadAvatarMutation.mutateAsync(form)
        avatarName = uploadRes.data.data
        setValue('avatar', avatarName)
      }

      const res = await updateProfileMutation.mutateAsync({
        ...data,
        date_of_birth: data.date_of_birth?.toISOString(),
        avatar: avatarName
      })
      console.log(res)
      setProfile(res.data.data)
      setProfileToLS(res.data.data)
      refetch()
      toast.success(res.data.message, {
        position: 'top-center',
        autoClose: 2000
      })
    } catch (error) {
      if (isUnprocessableEntity<ErrorResponse<FormDataError>>(error)) {
        const formError = error.response?.data.data
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof FormDataError, {
              message: formError[key as keyof FormDataError],
              type: 'Server'
            })
          })
        }
      }
    }
  })

  const handleUploadImage = () => {
    uploadImageRef.current?.click()
  }

  const uploadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    setFile(selectedFile)
  }

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
              {/* {avatar && (
                <img src={preview || getUrlAvatar(avatar)} alt='' className='w-full h-full object-cover rounded-full' />
              )}
              {!avatar &&
                (preview ? (
                  <img src={preview} alt='' className='w-full h-full object-cover rounded-full' />
                ) : (
                  <img src={avatarUpload} alt='' />
                ))} */}
              {
                <img
                  src={preview || (avatar && getUrlAvatar(avatar)) || avatarUpload}
                  alt=''
                  className={`${preview || (avatar && getUrlAvatar(avatar)) ? 'w-full h-full object-cover rounded-full' : ''}`}
                />
              }
            </div>
            <div className=''>
              <input
                className='hidden'
                type='file'
                // multiple
                accept='.jpg,.jpeg,.png'
                ref={uploadImageRef}
                onChange={uploadAvatar}
              ></input>
              <button
                type='button'
                className='py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:opacity-90'
                onClick={handleUploadImage}
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
