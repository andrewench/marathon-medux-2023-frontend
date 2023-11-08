'use client'

import { MainProvider } from '@/components/providers'

import { Dashboard } from '@/components/screens'

export default function DashboardPage() {
  return (
    <MainProvider>
      <Dashboard />
    </MainProvider>
  )
}
