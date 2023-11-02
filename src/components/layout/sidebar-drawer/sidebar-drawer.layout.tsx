'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

import { Drawer, Emergency, Flex, SideBarMenu } from '@/components/layout'

import { SquareButton } from '@/components/ui'

import { CloseIcon } from '@/components/icons'

import { useActions } from '@/shared/hooks'

import styles from './sidebar-drawer.module.scss'

export const SideBarDrawer: FC = () => {
  const { toggleSideBar } = useActions()

  return (
    <Drawer position="left" className={styles.drawer}>
      <Flex align="center" content="space-between" className={styles.head}>
        <Link href="/dashboard" draggable={false}>
          <Image
            src="/logo.svg"
            width={164}
            height={42}
            alt="Medux Logo"
            priority={true}
            draggable={false}
          />
        </Link>

        <SquareButton
          onClick={() => {
            toggleSideBar()
          }}
          className={styles.close}
        >
          <CloseIcon />
        </SquareButton>
      </Flex>

      <div className={styles.content}>
        <Emergency className={styles.emergency} />

        <SideBarMenu />
      </div>
    </Drawer>
  )
}
