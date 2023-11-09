'use client'

import { useRouter } from 'next/navigation'

import { Bell, ChevronDown, LogOut, Palette } from 'lucide-react'
import { FC, useEffect } from 'react'

import cn from 'clsx'

import { DropMenu, Flex } from '@/components/layout'

import { Avatar } from '@/components/shared'

import { DropMenuItem, SquareButton, ThemeSwitcher } from '@/components/ui'

import { useActions, useAppSelector } from '@/shared/hooks'

import { convertToDefinedValues } from '@/shared/utils'

import { useLogoutMutation } from '@/store/api'
import { app, user } from '@/store/slices'

import styles from './header-profile.module.scss'

export const HeaderProfile: FC = () => {
  const router = useRouter()

  const { setThemeMode } = useActions()

  const { themeMode } = useAppSelector(app)

  const { profile } = useAppSelector(user)

  const [logoutUser, { data }] = useLogoutMutation()

  const toggleTheme = () => {
    if (themeMode === 'light') {
      setThemeMode('dark')
    } else {
      setThemeMode('light')
    }
  }

  useEffect(() => {
    if (!data) return

    router.push('/login')
  }, [data, router])

  return (
    <Flex align="center" className={styles.profile}>
      <ThemeSwitcher />

      <button className={cn('button', styles.button, styles.notify)}>
        <Bell size={18} strokeWidth={1} className="icon" />
      </button>

      <Avatar />

      <div className={styles.meta}>
        <p className={cn('skeleton-line', styles.username)}>
          {convertToDefinedValues([profile.firstName, profile.lastName])}
        </p>

        <p className={cn('skeleton-line', styles.specialty)}>
          {convertToDefinedValues([profile.role])}
        </p>
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
            onClick={() => {
              logoutUser(null)
            }}
          />
        </DropMenu>
      </div>
    </Flex>
  )
}
