import { onChange } from 'node_modules/react-toastify/dist/core/store'
import React, { InputHTMLAttributes, forwardRef, useState } from 'react'

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameError?: string
  classNameInput?: string
}
// Có thể sử dụng arrow function làm callback => không cần đặt tên
const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(function InputNumberInner(
  {
    errorMessage,
    classNameInput = 'w-full px-2 py-[5px] placeholder:text-xs placeholder:color-black/80',
    classNameError = ' mt-1 min-h-5 text-sm font-medium text-red-500',
    onChange,
    value,
    ...rest
  },
  ref
) {
  const [localValue, setLocalValue] = useState<string>(value as string)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (/^\d+$/.test(value) || value === '') {
      onChange && onChange(event)
      setLocalValue(value)
    }
  }
  return (
    <>
      <input
        type='text'
        onChange={handleChange}
        className={classNameInput}
        value={value === undefined ? localValue : value}
        {...rest}
        ref={ref}
      />
      <p className={classNameError}>{errorMessage}</p>
    </>
  )
})

export default InputNumber
