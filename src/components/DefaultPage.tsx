import { cookies } from 'next/headers'
import EmptyMemory from './EmptyMemory'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
dayjs.locale(ptBr)

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

const DefaultPage = async () => {
  const isAuthenticated = cookies().has('token')
  if (!isAuthenticated) {
    return <EmptyMemory />
  }

  const token = cookies().get('token')?.value
  const memories: Memory[] = await api
    .get('/memories', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data)
  if (memories.length === 0) {
    return <EmptyMemory />
  }
  return (
    <div className='flex flex-col gap-10 p-8 '>
      {memories.map((memory) => (
        <div key={memory.id} className='space-y-4'>
          <time className='flex items-center gap-2 text-sm text-gray-100 -ml-8 before:h-px before:w-5 before:bg-gray-50'>
            {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
          </time>
          <Image
            src={memory.coverUrl}
            alt='imagem'
            width={592}
            height={280}
            className='w-full aspect-video object-cover rounded-lg'
          />
          <p className='text-lg text-gray-100 leading-relaxed'>
            {memory.excerpt}
          </p>
          <Link
            className='flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100'
            href={`/memories/${memory.id}`}
          >
            Ler mais <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
      ))}
    </div>
  )
}
export default DefaultPage
