import { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import { FormState } from '~/pages/Register/Register'

type Rules = {
  [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions
}

export const getRules = (getValues?: UseFormGetValues<FormState>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Please enter your email'
    },
    minLength: {
      value: 5,
      message: 'Please input at least 5 characters'
    },
    maxLength: {
      value: 150,
      message: 'Please input most 150 characters'
    },
    pattern: {
      value:
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
      message: 'Email is not valid form'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Please enter your password'
    },
    minLength: {
      value: 6,
      message: 'Please input at least 6 characters'
    },
    maxLength: {
      value: 160,
      message: 'Please input most 160 characters'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Please confirm your password'
    },
    minLength: {
      value: 6,
      message: 'Please input at least 6 characters'
    },
    maxLength: {
      value: 160,
      message: 'Please input most 160 characters'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => {
            const {password} = getValues()
            return password === value || 'Password is not matched'
          }
        : undefined
  }
})
