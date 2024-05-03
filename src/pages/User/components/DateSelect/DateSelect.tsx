import range from 'lodash/range'
import React, { useEffect, useState } from 'react'

interface Props {
  onChange?: (value: Date) => void
  value?: Date
  errorMessage?: string
}

export default function DateSelect({ errorMessage, onChange, value }: Props) {
  const [date, setDate] = useState({
    date: 1,
    month: 0,
    year: 1990
  })

  useEffect(() => {
    const newDate = {
      date: value?.getDate() || date.date,
      month: value?.getMonth() || date.month,
      year: value?.getFullYear() || date.year
    }
    setDate(newDate)
  }, [value, date.date, date.month, date.year])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target
    const newDate = {
      ...date,
      [name]: Number(value)
    }
    setDate(newDate)
    onChange && onChange(new Date(newDate.year, newDate.month, newDate.date))
  }
  return (
    <div>
      <div className='flex items-center gap-5'>
        <p className='text-right w-[30%]'>Date of birth</p>
        <div className='flex justify-between flex-1 gap-6'>
          <select
            name='date'
            className='flex-1 rounded-sm border border-solid border-black/30 px-3 py-2 cursor-pointer hover:border-red-500'
            onChange={handleChange}
            value={value?.getDate() || date.date}
          >
            <option>Day</option>
            {range(1, 32).map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            name='month'
            className='flex-1 rounded-sm border border-solid border-black/30 px-3 py-2 cursor-pointer hover:border-red-500'
            onChange={handleChange}
            value={value?.getMonth() || date.month}
          >
            <option>Month</option>
            {range(0, 12).map((item, index) => (
              <option key={index} value={item}>
                {item + 1}
              </option>
            ))}
          </select>
          <select
            name='year'
            className='flex-1 rounded-sm border border-solid border-black/30 px-3 py-2 cursor-pointer hover:border-red-500'
            onChange={handleChange}
            value={value?.getFullYear() || date.year}
          >
            <option>Year</option>
            {range(new Date().getFullYear(), 1899).map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <span className='text-right w-[30%] shrink-0'></span>
        <p className=' mt-1 min-h-5 text-sm font-medium text-red-500 text-center'>{errorMessage}</p>
      </div>
    </div>
  )
}
