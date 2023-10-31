'use client'

import { FC, PropsWithChildren } from 'react'

import cn from 'clsx'

import { Header, SideBar } from '@/components/layout'

import { PageIndicator, PageTitle } from '@/components/shared'

import styles from './page.module.scss'

export const PageLayout: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <div className={cn(styles.page, 'page')}>
      <PageIndicator />

      <Header />

      <div className={styles.content}>
        <SideBar />

        <PageTitle title={title} />

        {children}
      </div>
    </div>
  )
}
