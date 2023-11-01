'use client'

import { FC } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { EmergencyHelp, SideBarItem } from '@/components/ui'

import { DoubleChevronLeftIcon } from '@/components/icons'

import { useActions, useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import { SideBarList } from './sidebar.data'

import styles from './sidebar.module.scss'

export const SideBar: FC = () => {
  const { sideBar, themeMode } = useAppSelector(app)

  const { toggleSideBar } = useActions()

  return (
    <div
      className={cn(styles.box, {
        [styles.minimized]: !sideBar.isOpen,
      })}
    >
      <Flex
        align="center"
        className={cn(styles.emergency, {
          [styles.minimized]: !sideBar.isOpen,
        })}
      >
        <EmergencyHelp notify />

        {sideBar.isOpen && <p className={styles.help}>Emergency Help</p>}
      </Flex>

      <ul
        className={cn(styles.menu, {
          [styles.minimized]: !sideBar.isOpen,
        })}
      >
        {SideBarList.map((link, idx) => (
          <SideBarItem
            icon={link.icon}
            href={link.href}
            label={link.label}
            key={idx}
          />
        ))}
      </ul>

      <button
        onClick={() => {
          toggleSideBar()
        }}
        className={styles.themeSwitcher}
      >
        <DoubleChevronLeftIcon
          className={cn({
            [styles.minimized]: !sideBar.isOpen,
          })}
        />
      </button>
    </div>
  )
}
