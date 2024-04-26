import { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type Rules = {
  [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions
}
interface FormState {
  email: string
  password: string
  confirm_password: string
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
            const { password } = getValues()
            return password === value || 'Password is not matched'
          }
        : undefined
  }
})


export const schema = yup.object({
  email: yup
    .string()
    .required('Please enter your email')
    .min(5, 'Please input at least 5 characters')
    .max(150, 'Please input most 150 characters')
    .matches(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
      'Email is not valid form'
    ),
  password: yup
    .string()
    .required('Please enter your password')
    .min(6, 'Please input at least 6 characters')
    .max(160, 'Please input most 160 characters'),
  confirm_password: yup
    .string()
    .required('Please enter your password')
    .min(6, 'Please input at least 6 characters')
    .max(160, 'Please input most 160 characters')
    .oneOf([yup.ref('password')], 'Password is not matched'),
  price_min: yup.string().test({
    name: 'price_min-not-valid',
    message: 'Range of price is not valid',
    test: function (value) {
      const { price_max } = this.parent as { price_min: string; price_max: string }
      const price_min = value
      if (price_min !== '' && price_max !== '') {
        return Number(price_min) <= Number(price_max)
      }
      return price_min !== '' || price_max !== ''
    }
  }),
  price_max: yup.string().test({
    name: 'price_max-not-valid',
    message: 'Range of price is not valid',
    test: function (value) {
      const { price_min } = this.parent as { price_min: string; price_max: string }
      const price_max = value
      if (price_min !== '' && price_max !== '') {
        return Number(price_min) <= Number(price_max)
      }
      return price_min !== '' || price_max !== ''
    }
  }),
  product: yup.string().trim().required('Please enter the product to filter')
})

export type Schema = yup.InferType<typeof schema>
