'use client'

import { FC, useEffect, useState } from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'

import cn from 'clsx'
import { AnimatePresence } from 'framer-motion'

import { PageTitle } from '@/components/shared'

import { useAppSelector } from '@/shared/hooks'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import { app } from '@/store/slices'

import { Header } from '../header/header.layout'
import { SideBarDrawer } from '../sidebar-drawer/sidebar-drawer.layout'
import { SideBar } from '../sidebar/sidebar.layout'

import styles from './page.module.scss'

TopBarProgress.config({
  barColors: {
    '0': '#2662F0',
    '1.0': '#2662F0',
  },
  barThickness: 4,
})

export const PageLayout: FC<
  PropsWithClassNameAndChildren<{ title: string }>
> = ({ title, className, children }) => {
  const [isRenderDrawer, setRenderDrawer] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false

    if (window.innerWidth <= 1024) return true

    return false
  })

  const { sideBar, isGlobalFetching } = useAppSelector(app)

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
      {isGlobalFetching && <TopBarProgress />}

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

        <div>
          <PageTitle title={title} />

          <div className={cn(styles.viewContent, className)}>{children}</div>
        </div>
      </div>
    </div>
  )
}
