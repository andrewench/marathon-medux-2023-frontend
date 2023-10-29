'use client'

import { FC } from 'react'

import { Flex } from '@/components/layout'

import { EmergencyHelp, SideBarItem } from '@/components/ui'

import { SideBarList } from './sidebar.data'

import styles from './sidebar.module.scss'

export const SideBar: FC = () => {
  return (
    <div className={styles.box}>
      <Flex align="center" className={styles.emergency}>
        <EmergencyHelp notify />

        <p className={styles.help}>Emergency Help</p>
      </Flex>

      <ul className={styles.menu}>
        {SideBarList.map((link, idx) => (
          <SideBarItem
            icon={link.icon}
            href={link.href}
            label={link.label}
            key={idx}
          />
        ))}
      </ul>
    </div>
  )
}
