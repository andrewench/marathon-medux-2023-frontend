'use client'

import { ChevronsLeft } from 'lucide-react'
import { FC } from 'react'

import cn from 'clsx'

import { useActions, useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import { Emergency } from '../emergency/emergency.layout'
import { SideBarMenu } from '../sidebar-menu/sidebar-menu.layout'

import styles from './sidebar.module.scss'

export const SideBar: FC = () => {
  const { sideBar } = useAppSelector(app)

  const { toggleSideBar } = useActions()

  return (
    <div
      className={cn(styles.box, {
        [styles.minimized]: !sideBar.isOpen,
      })}
    >
      <Emergency responsive />

      <SideBarMenu responsive />

      <button
        onClick={() => {
          toggleSideBar()
        }}
        className={styles.themeSwitcher}
      >
        <ChevronsLeft
          size={18}
          strokeWidth={1}
          className={cn('icon', {
            [styles.minimized]: !sideBar.isOpen,
          })}
        />
      </button>
    </div>
  )
}
