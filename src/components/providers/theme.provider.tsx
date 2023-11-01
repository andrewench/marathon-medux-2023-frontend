import { FC, PropsWithChildren, useEffect, useState } from 'react'

import { AppConstant } from '@/shared/constants'

import { useActions, useAppSelector } from '@/shared/hooks'

import { type TThemeMode } from '@/shared/types'

import { app } from '@/store/slices'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { setThemeMode } = useActions()

  const [_] = useState<TThemeMode>(() => {
    const {
      theme: { DEFAULT_VALUE },
    } = AppConstant

    if (typeof window === 'undefined') return DEFAULT_VALUE

    const currentTheme = localStorage.getItem(
      AppConstant.storage.keys.THEME_PREFIX,
    ) as TThemeMode

    if (!currentTheme) return DEFAULT_VALUE

    const isValidValues = AppConstant.theme.VALUES.some(
      value => value === currentTheme,
    )

    if (!isValidValues) return DEFAULT_VALUE

    setThemeMode(currentTheme)

    return currentTheme
  })

  const { themeMode } = useAppSelector(app)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode)

    localStorage.setItem(AppConstant.storage.keys.THEME_PREFIX, themeMode)
  }, [themeMode])

  return <>{children}</>
}
