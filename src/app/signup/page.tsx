'use client'

import { MainProvider } from '@/components/providers'

import { SignUp } from '@/components/screens'

export default function LoginPage() {
  return (
    <MainProvider>
      <SignUp />
    </MainProvider>
  )
}
