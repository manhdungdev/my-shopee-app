import React, { useState } from 'react'
import InputNumber, { InputNumberProps } from '../InputNumber'

interface Props extends InputNumberProps {
  max?: number
  onDecrease?: (value: number) => void
  onType?: (value: number) => void
  onIncrease?: (value: number) => void
  onFocusOut?: (value: number) => void
}

export default function QuantityController({ max, onDecrease, onType, onIncrease, onFocusOut, value, ...rest }: Props) {
  const [localValue, setLocalValue] = useState(Number(value || 1))
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let valueInput = Number(event.target.value)
    if (max !== undefined && valueInput > max) {
      valueInput = max
    } else if (valueInput < 1) {
      valueInput = 1
    }
    onType && onType(valueInput)
    setLocalValue(valueInput)
  }
  const increase = () => {
    let valueInput = Number(value || localValue) + 1
    if (max !== undefined && valueInput > max) {
      valueInput = max
      return
    }
    onIncrease && onIncrease(valueInput)
    setLocalValue(valueInput)
  }

  const decrease = () => {
    let valueInput = Number(value || localValue) - 1
    if (valueInput < 1) {
      valueInput = 1
      return
    }
    onDecrease && onDecrease(valueInput)
    setLocalValue(valueInput)
  }

  const handleFocusOut = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    const valueInput = Number(event.target.value)
    onFocusOut && onFocusOut(valueInput)
  }
  return (
    <div className='flex items-center '>
      <button
        className='bg-transparent h-8 px-3 flex items-center border border-solid border-black/10'
        onClick={decrease}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' height='10px'>
          <path d='M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z' />
        </svg>
      </button>
      <InputNumber
        value={value || localValue}
        classNameInput='border border-solid border-black/10 px-3 w-[65px] h-8 text-center'
        onChange={handleChange}
        onBlur={handleFocusOut}
        {...rest}
      />
      <button
        className='bg-transparent h-8 px-3 flex items-center border border-solid border-black/10'
        onClick={increase}
      >
        <svg height='10px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
          <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
        </svg>
      </button>
    </div>
  )
}
