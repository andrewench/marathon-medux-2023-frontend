import type { Metadata } from 'next'

import { FC, PropsWithChildren } from 'react'

import { DocumentLayout } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Medux | Dashboard',
  icons: '/favicon.svg',
}

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <DocumentLayout>{children}</DocumentLayout>
)

export default DashboardLayout
