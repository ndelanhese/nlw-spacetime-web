'use client'

import { ChangeEvent, useState } from 'react'

const MediaPicker = () => {
  const [preview, setPreview] = useState<string | null>(null)

  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (!files) return
    const previewURL = URL.createObjectURL(files[0])
    setPreview(previewURL)
  }
  return (
    <>
      <input
        type='file'
        id='media'
        name='coverURL'
        className='invisible h-0 w-0'
        accept='image/*'
        multiple={false}
        onChange={onFileSelected}
      />
      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt='image-preview'
          className='w-full aspect-video rounded-lg object-cover'
        />
      )}
    </>
  )
}
export default MediaPicker
