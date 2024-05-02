import { onChange } from 'node_modules/react-toastify/dist/core/store'
import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { config } from '~/constants/config'

interface Props {
  onChange?: (file?: File) => void
}

export default function InputFile({ onChange }: Props) {
  const uploadImageRef = useRef<HTMLInputElement>(null)
  const handleUploadImage = () => {
    uploadImageRef.current?.click()
  }

  const uploadAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile && (selectedFile.size >= config.maxSizeUploadAvatar || !selectedFile.type.includes('image'))) {
      toast.error('File size: maximum 1 MB, File extension: .JPEG, .PNG')
    } else {
      //   setFile(selectedFile)
      onChange && onChange(selectedFile)
    }
  }
  return (
    <div className=''>
      <input
        className='hidden'
        type='file'
        // multiple
        accept='.jpg,.jpeg,.png'
        ref={uploadImageRef}
        onChange={uploadAvatar}
        onClick={(event) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(event.target as any).value = null
        }}
      ></input>
      <button
        type='button'
        className='rounded-sm border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:opacity-90 focus:outline-none'
        onClick={handleUploadImage}
      >
        Select image
      </button>
    </div>
  )
}
