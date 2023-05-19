import { getUser } from '@/lib/auth'
import { LogOut } from 'lucide-react'
import Image from 'next/image'

const Profile = () => {
  const { name, avatarUrl } = getUser()
  return (
    <div className='flex items-center gap-3 text-left '>
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        className='rounded-full'
        alt={`${name}-avatar`}
      />
      <p className='max-w-[140px] text-sm leading-snug'>
        {name}{' '}
        <a
          href='/api/auth/logout'
          className='block text-red-400 hover:text-red-300'
        >
          Quero sair {<LogOut className='inline w-4 h-4' />}
        </a>
      </p>
    </div>
  )
}
export default Profile
