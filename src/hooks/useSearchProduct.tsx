import { useQueryClient } from '@tanstack/react-query'
import React from 'react'
import useQueryConfig from './useQueryConfig'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Schema, schema } from '~/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { omit } from 'lodash'
import { path } from '~/constants/path'

type FormData = Pick<Schema, 'product'>
const productSchema = schema.pick(['product'])

export default function useSearchProduct() {
  const queryClient = useQueryClient()
  const queryConfig = useQueryConfig()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      product: ''
    },
    resolver: yupResolver(productSchema)
  })
  const handleOnSubmit = handleSubmit((data) => {
    const config = queryConfig.order
      ? omit(
          {
            ...queryConfig,
            name: data.product
          },
          ['order', 'sort_by', 'category']
        )
      : omit(
          {
            ...queryConfig,
            name: data.product
          },
          ['category']
        )
    navigate({
      pathname: path.home,
      search: createSearchParams(config).toString()
    })
  })
  return {register, handleOnSubmit}
}
