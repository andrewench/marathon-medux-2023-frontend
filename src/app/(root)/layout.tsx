import type { Metadata } from 'next'

import { FC, PropsWithChildren } from 'react'

import styles from './page.module.scss'
import cn from 'clsx'

import { roboto, rubik } from '@/shared/fonts'

import '@/assets/styles/global.scss'

export const metadata: Metadata = {
  title: 'Medux | Login',
  icons: '/favicon.svg',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" data-theme="light">
      <body className={cn(styles.box, rubik.variable, roboto.variable)}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
