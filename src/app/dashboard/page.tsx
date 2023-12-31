'use client'

import { AuthProvider, MainProvider } from '@/components/providers'

import { Dashboard } from '@/components/screens'

export default function DashboardPage() {
  return (
    <MainProvider>
      <AuthProvider>
        <Dashboard />
      </AuthProvider>
    </MainProvider>
  )
}
