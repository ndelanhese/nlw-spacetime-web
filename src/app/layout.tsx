import React from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import Blur from '@/components/Blur'
import Stripe from '@/components/Stripe'
import Profile from '@/components/Profile'
import Register from '@/components/Register'
import Hero from '@/components/Hero'
import Copyright from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'A time capsule built with React, Next.js, Tailwind CSS, and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang='pt-BR'>
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans  text-gray-100`}
      >
        <main className='grid grid-cols-2 min-h-screen'>
          <div className='flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover'>
            <Blur />
            <Stripe />
            {isAuthenticated ? <Profile /> : <Register />}
            <Hero />
            <Copyright />
          </div>
          <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
