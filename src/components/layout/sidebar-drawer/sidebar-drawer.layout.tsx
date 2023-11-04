'use client'

import Link from 'next/link'

import { X } from 'lucide-react'
import { FC } from 'react'

import {
  Drawer,
  Emergency,
  Flex,
  SideBarMenu,
  StaticLogo,
} from '@/components/layout'

import { SquareButton } from '@/components/ui'

import { useActions } from '@/shared/hooks'

import styles from './sidebar-drawer.module.scss'

export const SideBarDrawer: FC = () => {
  const { toggleSideBar } = useActions()

  return (
    <Drawer position="left" className={styles.drawer}>
      <Flex align="center" content="space-between" className={styles.head}>
        <Link href="/dashboard" draggable={false}>
          <StaticLogo />
        </Link>

        <SquareButton
          onClick={() => {
            toggleSideBar()
          }}
          className={styles.close}
        >
          <X size={30} strokeWidth={1} className="icon" />
        </SquareButton>
      </Flex>

      <div className={styles.content}>
        <Emergency className={styles.emergency} />

        <SideBarMenu />
      </div>
    </Drawer>
  )
}
