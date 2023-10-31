import Link from 'next/link'

import { FC } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import { type ISideBarItem } from './sidebar-item.interface'

import styles from './sidebar-item.module.scss'

export const SideBarItem: FC<ISideBarItem> = ({ href, label, icon }) => {
  const { sideBar } = useAppSelector(app)

  return (
    <li className={styles.item}>
      <Link
        href={href}
        draggable={false}
        className={cn(styles.link, {
          [styles.minimized]: !sideBar.isOpen,
        })}
      >
        <Flex align="center" content="center" className={styles.icon}>
          {icon}
        </Flex>

        {sideBar.isOpen && label}
      </Link>
    </li>
  )
}
