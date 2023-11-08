'use client'

import { MainProvider } from '@/components/providers'

import { Login } from '@/components/screens'

export default function LoginPage() {
  return (
    <MainProvider>
      <Login />
    </MainProvider>
  )
}
