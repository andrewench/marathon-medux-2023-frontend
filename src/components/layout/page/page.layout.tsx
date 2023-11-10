'use client'

import { FC, PropsWithChildren, useEffect, useState } from 'react'

import cn from 'clsx'
import { AnimatePresence } from 'framer-motion'

import { PageIndicator, PageTitle } from '@/components/shared'

import { useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import { Header } from '../header/header.layout'
import { SideBarDrawer } from '../sidebar-drawer/sidebar-drawer.layout'
import { SideBar } from '../sidebar/sidebar.layout'

import styles from './page.module.scss'

export const PageLayout: FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  const [isRenderDrawer, setRenderDrawer] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false

    if (window.innerWidth <= 1024) return true

    return false
  })

  const { sideBar } = useAppSelector(app)

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth <= 1024) {
        if (isRenderDrawer) return

        setRenderDrawer(true)
      } else {
        if (!isRenderDrawer) return

        setRenderDrawer(false)
      }
    }

    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [isRenderDrawer])

  return (
    <div className={cn(styles.page, 'page')}>
      <PageIndicator />

      <Header />

      <div
        className={cn(styles.content, {
          [styles.minimized]: !sideBar.isOpen,
        })}
      >
        {!isRenderDrawer && <SideBar />}

        <AnimatePresence>
          {sideBar.isOpen && isRenderDrawer && <SideBarDrawer />}
        </AnimatePresence>

        <PageTitle title={title} />

        {children}
      </div>
    </div>
  )
}
