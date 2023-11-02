'use client'

import { FC } from 'react'

import cn from 'clsx'

import { SideBarItem } from '@/components/ui'

import { useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import { SideBarList } from '../sidebar/sidebar.data'

import styles from './sidebar-menu.module.scss'

export const SideBarMenu: FC<{ responsive?: boolean }> = ({ responsive }) => {
  const { sideBar } = useAppSelector(app)

  return (
    <ul
      className={cn(styles.menu, {
        [styles.minimized]: !sideBar.isOpen && responsive,
      })}
    >
      {SideBarList.map((link, idx) => (
        <SideBarItem
          icon={link.icon}
          href={link.href}
          label={link.label}
          responsive={responsive}
          key={idx}
        />
      ))}
    </ul>
  )
}
