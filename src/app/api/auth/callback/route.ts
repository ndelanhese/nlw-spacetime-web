import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const register = await api.post('/register', { code })
  const { token } = register.data
  const redirectUrl = new URL('/', request.url)
  const ONE_DAY_IN_SECONDS = 60 * 60 * 24
  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${ONE_DAY_IN_SECONDS};`,
    },
  })
}
