'use client'

import { FC } from 'react'

import { PageLayout } from '@/components/layout'

import { MainProvider } from '@/components/providers'

const Page: FC = () => {
  return (
    <MainProvider>
      <PageLayout title="Basic Doctor Dashboard" />
    </MainProvider>
  )
}

export default Page
