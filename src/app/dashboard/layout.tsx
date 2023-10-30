import type { Metadata } from 'next'

import { FC, PropsWithChildren } from 'react'

import { PageLayout } from '@/components/layout/page/page.layout'

export const metadata: Metadata = {
  title: 'Medux | Dashboard',
  icons: '/favicon.svg',
}

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <PageLayout>{children}</PageLayout>
)

export default DashboardLayout
