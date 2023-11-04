'use client'

import { Palette } from 'lucide-react'
import { FC } from 'react'

import cn from 'clsx'

import { useActions, useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import styles from './theme-switcher.module.scss'

export const ThemeSwitcher: FC = () => {
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
    <button onClick={toggleTheme} className={cn('button', styles.button)}>
      <Palette size={18} strokeWidth={1} className="icon" />
    </button>
  )
}
