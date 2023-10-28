import Link from 'next/link'

import { FC } from 'react'

import { Flex } from '@/components/layout'

import { type ISideBarItem } from './sidebar-item.interface'

import styles from './sidebar-item.module.scss'

export const SideBarItem: FC<ISideBarItem> = ({ href, label, icon }) => {
  return (
    <li className={styles.item}>
      <Link href={href} draggable={false} className={styles.link}>
        <Flex align="center" content="center" className={styles.icon}>
          {icon}
        </Flex>

        {label}
      </Link>
    </li>
  )
}
