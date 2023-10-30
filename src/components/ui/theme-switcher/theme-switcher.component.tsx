import { FC, useEffect, useState } from 'react'

import cn from 'clsx'

import { PaletteIcon } from '@/components/icons'

import { AppConstant } from '@/shared/constants'

import { TThemeMode } from '@/shared/types'

import styles from './theme-switcher.module.scss'

export const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = useState<TThemeMode>(() => {
    const {
      storage,
      theme: { DEFAULT_VALUE },
    } = AppConstant

    if (typeof window === 'undefined') return DEFAULT_VALUE

    const currentTheme = localStorage.getItem(
      storage.keys.THEME_PREFIX,
    ) as TThemeMode

    if (!currentTheme) return DEFAULT_VALUE

    const isValidValues = AppConstant.theme.VALUES.some(
      value => value === currentTheme,
    )

    if (!isValidValues) return DEFAULT_VALUE

    return currentTheme
  })

  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    localStorage.setItem(AppConstant.storage.keys.THEME_PREFIX, theme)
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      className={cn('header-button', styles.button)}
    >
      <PaletteIcon />
    </button>
  )
}
