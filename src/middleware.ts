import { NextRequest, NextResponse } from 'next/server'
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  if (!token) {
    const sigInURL = `http://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
    const TEN_SECONDS = 10
    return NextResponse.redirect(sigInURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; max-age=${TEN_SECONDS}; HttpOnly;`,
      },
    })
  }
  return NextResponse.next()
}
export const config = {
  matcher: ['/memories/:path*'],
}
