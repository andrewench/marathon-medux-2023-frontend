'use client'

import { useRouter } from 'next/navigation'

import { Bell, ChevronDown, LogOut, Palette } from 'lucide-react'
import { FC, useEffect } from 'react'

import cn from 'clsx'

import { DropMenu, Flex } from '@/components/layout'

import { Avatar } from '@/components/shared'

import { DropMenuItem, SquareButton, ThemeSwitcher } from '@/components/ui'

import { useAppSelector } from '@/shared/hooks'

import { convertToDefinedValues } from '@/shared/utils'

import { useLogoutMutation } from '@/store/api'
import { user } from '@/store/slices'

import { DropList } from '../drop-list/drop-list.layout'

import styles from './header-profile.module.scss'

export const HeaderProfile: FC = () => {
  const router = useRouter()

  const { profile } = useAppSelector(user)

  const [logoutUser, { data }] = useLogoutMutation()

  useEffect(() => {
    if (!data) return

    router.push('/login')
  }, [data, router])

  return (
    <Flex align="center" className={styles.profile}>
      <ThemeSwitcher />

      <SquareButton>
        <Bell size={18} strokeWidth={1} className="icon" />
      </SquareButton>

      <Avatar src="/assets/images/user_1.png" alt="Avatar" />

      <div className={styles.meta}>
        <p className={cn('skeleton-line', styles.username)}>
          {convertToDefinedValues([profile.firstName, profile.lastName])}
        </p>

        <p className={cn('skeleton-line', styles.specialty)}>
          {convertToDefinedValues([profile.role])}
        </p>
      </div>

      <DropList
        position="right"
        slots={{
          button: (
            <SquareButton>
              <ChevronDown size={24} strokeWidth={1} className="icon" />
            </SquareButton>
          ),
          list: (
            <>
              <DropMenuItem
                label="Toggle Theme"
                icon={<Palette size={18} strokeWidth={1} className="icon" />}
                onClick={() => {}}
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
            </>
          ),
        }}
      />
    </Flex>
  )
}
