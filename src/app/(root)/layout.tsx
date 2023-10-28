import type { Metadata } from 'next'

import { FC, PropsWithChildren } from 'react'

import '@/assets/styles/global.scss'

export const metadata: Metadata = {
  title: 'Medux | Login',
  icons: '/favicon.svg',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className="page">{children}</body>
    </html>
  )
}

export default RootLayout
