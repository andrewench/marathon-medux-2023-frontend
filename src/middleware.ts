import { NextRequest, NextResponse } from 'next/server'

import { Constants } from '@/shared/constants'

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const { ACCESS_TOKEN_PREFIX, REFRESH_TOKEN_PREFIX } = Constants.tokens

  const accessToken = request.cookies.get(ACCESS_TOKEN_PREFIX)
  const refreshToken = request.cookies.get(REFRESH_TOKEN_PREFIX)

  switch (pathname) {
    case '/login':
      return accessToken
        ? NextResponse.redirect(new URL('/dashboard', request.url))
        : NextResponse.next()

    case '/dashboard':
      return !refreshToken
        ? NextResponse.redirect(new URL('/login', request.url))
        : NextResponse.next()
  }
}
