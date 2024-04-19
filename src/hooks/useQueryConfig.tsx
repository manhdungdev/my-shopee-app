import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function useQueryConfig() {
  const [searchParams] = useSearchParams()
  return Object.fromEntries([...searchParams])
}
