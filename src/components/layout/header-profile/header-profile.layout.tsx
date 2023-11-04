'use client'

import { Bell, ChevronDown, LogOut, Palette } from 'lucide-react'
import { FC } from 'react'

import cn from 'clsx'

import { DropMenu, Flex } from '@/components/layout'

import { Avatar } from '@/components/shared'

import { DropMenuItem, SquareButton, ThemeSwitcher } from '@/components/ui'

import { useActions, useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import styles from './header-profile.module.scss'

export const HeaderProfile: FC = () => {
  const { setThemeMode } = useActions()

  const { themeMode } = useAppSelector(app)

  const toggleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark')
    } else {
      setThemeMode('light')
    }
  }

  return (
    <Flex align="center" className={styles.profile}>
      <ThemeSwitcher />

      <button className={cn('button', styles.button, styles.notify)}>
        <Bell size={18} strokeWidth={1} className="icon" />
      </button>

      <Avatar />

      <div className={styles.meta}>
        <p className={styles.username}>Nicholas Doyle</p>
        <p className={styles.specialty}>Surgeon</p>
      </div>

      <div className="drop-menu">
        <div className={styles.dropBox}>
          <SquareButton>
            <ChevronDown size={24} strokeWidth={1} className="icon" />
          </SquareButton>
        </div>

        <DropMenu position="right">
          <DropMenuItem
            label="Toggle Theme"
            icon={<Palette size={18} strokeWidth={1} className="icon" />}
            onClick={toggleTheme}
            className={styles.themeItem}
          />

          <DropMenuItem
            label="Notifications"
            icon={<Bell size={18} strokeWidth={1} className="icon" />}
            className={styles.notifyItem}
          />

          <DropMenuItem
            label="Logout"
            icon={<LogOut size={18} strokeWidth={1} className="icon" />}
          />
        </DropMenu>
      </div>
    </Flex>
  )
}
