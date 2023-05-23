'use client'
import { Camera } from 'lucide-react'
import MediaPicker from './MediaPicker'
import { FormEvent } from 'react'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'
import Cookie from 'js-cookie'

const NewMemoryForm = () => {
  const router = useRouter()
  const handleCreateMemory = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fileToUpload = formData.get('coverURL')
    let coverUrl = ''
    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)
      const uploadResponse = await api.post('/upload', uploadFormData)
      coverUrl = uploadResponse.data.fileURL
    }
    const token = Cookie.get('token')
    await api.post(
      '/memories',
      {
        content: formData.get('content'),
        coverUrl,
        isPublic: formData.get('isPublic'),
      },
      { headers: { Authorization: `Bearer ${token}` } },
    )
    router.push('/')
  }
  return (
    <form
      className='flex flex-col gap-2 flex-1 p-16'
      onSubmit={handleCreateMemory}
    >
      <div className='flex items-center gap-4'>
        <label
          htmlFor='media'
          className='flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100'
        >
          <Camera className='h-4 w-4' />
          Anexar mídia
        </label>
        <label
          htmlFor='isPublic'
          className='flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100'
        >
          <input
            type='checkbox'
            name='isPublic'
            id='isPublic'
            value='true'
            className='h-4 w-4 rounded border-gray-400bg-gray-700 text-purple-500'
          />
          Tornar memória pública
        </label>
      </div>
      <MediaPicker />
      <textarea
        name='content'
        spellCheck={false}
        className='w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0'
        placeholder='Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre.'
      />
      <button className='self-end inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600'>
        salvar
      </button>
    </form>
  )
}
export default NewMemoryForm
