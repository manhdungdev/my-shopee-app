import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import userApi from '~/apis/user.api'
import InputNumber from '~/components/InputNumber'
import { AppContext } from '~/contexts/app.contexts'
import { ErrorResponse } from '~/types/utils.type'
import { UserSchema, userSchema } from '~/utils/rules'
import { isUnprocessableEntity } from '~/utils/utils'
import DateSelect from '../../components/DateSelect'
import omit from 'lodash/omit'
import InputPassword from '../../components/InputPassword'
type FormData = Pick<UserSchema, 'password' | 'new_password' | 'confirm_password'>

const passwordSchema = userSchema.pick(['password', 'new_password', 'confirm_password'])

export default function ChangePassword() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    reset
  } = useForm<FormData>({
    defaultValues: {
      password: '',
      new_password: '',
      confirm_password: ''
    },
    resolver: yupResolver(passwordSchema)
  })

  const updateProfileMutation = useMutation({
    mutationFn: userApi.updateProfile
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await updateProfileMutation.mutateAsync(omit(data, ['confirm_password']))
      toast.success(res.data.message, {
        position: 'top-center',
        autoClose: 2000
      })
      reset()
    } catch (error) {
      if (isUnprocessableEntity<ErrorResponse<FormData>>(error)) {
        const formError = error.response?.data.data
        if (formError) {
          Object.keys(formError).forEach((key) => {
            setError(key as keyof FormData, {
              message: formError[key as keyof FormData],
              type: 'Server'
            })
          })
        }
      }
    }
  })
  return (
    <div className='mt-4 bg-white px-8 pb-12 pt-5'>
      <h1 className='text-xl font-semibold text-[#111]'>Change password</h1>
      <p className='mt-3 text-sm'>Change password to protect your account</p>
      <div className='my-8 h-[1px] w-full bg-[#d5d4d4] '></div>
      <form onSubmit={onSubmit} noValidate>
        <div className='flex flex-col gap-5  pr-[50px]  text-sm text-[#555555cc]'>
          <InputPassword
            type='password'
            name='password'
            register={register}
            errorMessage={errors.password?.message}
            placeholder='Old password'
          >
            Old password
          </InputPassword>

          <InputPassword
            type='password'
            name='new_password'
            register={register}
            errorMessage={errors.new_password?.message}
            placeholder='New password'
          >
            New password
          </InputPassword>

          <InputPassword
            type='password'
            name='confirm_password'
            register={register}
            errorMessage={errors.confirm_password?.message}
            placeholder='Confirm password'
          >
            Confirm password
          </InputPassword>

          <div className='flex items-center gap-5'>
            <p className='w-[30%] text-right'></p>
            <button
              type='submit'
              className=' w-[100px] rounded-sm bg-[#ee4d2d] px-4 py-2 text-sm font-normal text-white hover:opacity-90'
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
