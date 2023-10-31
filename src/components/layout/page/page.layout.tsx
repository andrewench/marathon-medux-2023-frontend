'use client'

import { FC, PropsWithChildren } from 'react'

import cn from 'clsx'

import { Header, SideBar } from '@/components/layout'

import { PageIndicator, PageTitle } from '@/components/shared'

import { useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import styles from './page.module.scss'

export const PageLayout: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  const { sideBar } = useAppSelector(app)

  return (
    <div
      className={cn(
        styles.page,
        {
          [styles.minimized]: !sideBar.isOpen,
        },
        'page',
      )}
    >
      <PageIndicator />

      <Header />

      <div
        className={cn(styles.content, {
          [styles.minimized]: !sideBar.isOpen,
        })}
      >
        <SideBar />

        <PageTitle title={title} />

        {children}
      </div>
    </div>
  )
}
