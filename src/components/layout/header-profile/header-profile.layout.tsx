'use client'

import { FC } from 'react'

import cn from 'clsx'

import { DropMenu, Flex } from '@/components/layout'

import { Avatar } from '@/components/shared'

import { DropMenuItem, ThemeSwitcher } from '@/components/ui'

import {
  BellIcon,
  ChevronDownIcon,
  LogoutIcon,
  PaletteIcon,
} from '@/components/icons'

import styles from './header-profile.module.scss'

export const HeaderProfile: FC = () => {
  return (
    <Flex align="center" className={styles.profile}>
      <ThemeSwitcher />

      <button className={cn('header-button', styles.button, styles.notify)}>
        <BellIcon />
      </button>

      <Avatar />

      <div>
        <p className={styles.username}>Nicholas Doyle</p>
        <p className={styles.specialty}>Surgeon</p>
      </div>

      <div className={styles.menu}>
        <div className={styles.dropBox}>
          <button className={cn('header-button', styles.button, styles.drop)}>
            <ChevronDownIcon />
          </button>
        </div>

        <DropMenu position="right">
          <DropMenuItem label="Toggle Theme" icon={<PaletteIcon />} />
          <DropMenuItem label="Notifications" icon={<BellIcon />} />
          <DropMenuItem label="Logout" icon={<LogoutIcon />} />
        </DropMenu>
      </div>
    </Flex>
  )
}
