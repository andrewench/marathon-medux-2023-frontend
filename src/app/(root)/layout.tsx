import type { Metadata } from 'next'

import { FC, PropsWithChildren } from 'react'

import styles from './page.module.scss'

import { PageLayout } from '@/components/layout'

export const metadata: Metadata = {
  title: 'Medux | Login',
  icons: '/favicon.svg',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <PageLayout className={styles.box}>{children}</PageLayout>
)

export default RootLayout
