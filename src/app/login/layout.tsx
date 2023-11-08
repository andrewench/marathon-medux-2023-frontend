import { type Metadata } from 'next'

import { FC, PropsWithChildren } from 'react'

import { DocumentLayout } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Medux | Sign in',
  icons: '/favicon.svg',
}

const LoginLayout: FC<PropsWithChildren> = ({ children }) => (
  <DocumentLayout>{children}</DocumentLayout>
)

export default LoginLayout
