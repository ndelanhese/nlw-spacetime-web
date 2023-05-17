import { User } from 'lucide-react'
import NlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid grid-cols-2 min-h-screen'>
      <div className='flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover'>
        <div className='absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full' />
        <div className='absolute right-2 p bottom-0 top-0 w-2 bg-stripes ' />
        <a
          href='#'
          className='flex items-center gap-3 text-left hover:text-gray-50 transition-colors'
        >
          <div className='flex h-10 w-10 items-center justify-center  rounded-full bg-gray-400'>
            <User className='h-5 w-5 text-gray-500' />
          </div>
          <p className='max-w-[140px] text-sm leading-snug'>
            <span className='underline'>Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        <div className='space-y-5'>
          <Image src={NlwLogo} alt='NLW Spacetime' />
          <div className='max-w-[420px] space-y-1'>
            <h1 className=' text-5xl font-bold leading-tight text-gray-50'>
              Sua capsula do tempo
            </h1>
            <p className='text-lg leading-relaxed'>
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <a
            className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600'
            href='#'
          >
            cadastrar lembrança
          </a>
        </div>

        <div>
          <p className='text-sm leading-relaxed text-gray-200'>
            Feito com 💜 no NLW Spacetime
          </p>
        </div>
      </div>
      <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover'>
        <div className='flex flex-1 items-center justify-center'>
          <p className='text-center leading-relaxed w-[360px]'>
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href='/register' className='underline hover:text-gray-50'>
              criar agora
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
