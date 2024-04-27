import React from 'react'
import InputNumber, { InputNumberProps } from '../InputNumber'

interface Props extends InputNumberProps {
  max?: number
  onDecrease?: (value: number) => void
  onType?: (value: number) => void
  onIncrease?: (value: number) => void
}

export default function QuantityController({ max, onDecrease, onType, onIncrease, value, ...rest }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    let valueInput = Number(event.target.value)
    if (max !== undefined && valueInput > max) {
      valueInput = max
    } else if (valueInput < 1) {
      valueInput = 1
    }
    onType && onType(valueInput)
  }
  const increase = () => {
    let valueInput = Number(value) + 1
    if (max !== undefined && valueInput > max) {
      valueInput = max
    }
    onIncrease && onIncrease(valueInput)
  }

  const decrease = () => {
    let valueInput = Number(value) - 1
    if (valueInput < 1) {
      valueInput = 1
    }
    onDecrease && onDecrease(valueInput)
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
        value={value}
        classNameInput='border border-solid border-black/10 px-3 w-[65px] h-8 text-center'
        onChange={handleChange}
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
