'use client'

import { Palette } from 'lucide-react'
import { FC, useCallback, useEffect, useRef, useState } from 'react'

import { DropList } from '@/components/layout/drop-list/drop-list.layout'

import { DropMenuItem } from '@/components/ui/drop-menu-item/drop-menu-item.component'
import { SquareButton } from '@/components/ui/square-button/square-button.component'

import { Constants } from '@/shared/constants'

import { useStorage } from '@/shared/hooks'

import { TThemeMode } from '@/shared/types'

import { ThemeModeList } from './theme-switcher.data'

export const ThemeSwitcher: FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<TThemeMode>()

  const { updateStorage, getStorage } = useStorage(Constants.storage.NAME)

  const colorSchemeQuery = useRef<MediaQueryList>(
    typeof window === 'undefined'
      ? null
      : window.matchMedia('(prefers-color-scheme: dark)'),
  )

  const isDark = colorSchemeQuery.current?.matches

  const applyTheme = useCallback(() => {
    const currentStorage = getStorage()

    const { theme } = currentStorage

    if (theme !== 'system') return
    if (!colorSchemeQuery.current) return

    const headElement = document.documentElement

    isDark
      ? headElement.setAttribute('data-theme', 'dark')
      : headElement.setAttribute('data-theme', 'light')
  }, [getStorage, isDark])

  useEffect(() => {
    if (!selectedTheme) return

    const currentStorage = getStorage()

    updateStorage(Constants.storage.NAME, {
      ...currentStorage,
      theme: selectedTheme,
    })
  }, [getStorage, selectedTheme, updateStorage])

  useEffect(() => {
    const schemeQuery = colorSchemeQuery.current

    if (!schemeQuery) return
    if (selectedTheme !== 'system') return

    const headElement = document.documentElement

    isDark
      ? headElement.setAttribute('data-theme', 'dark')
      : headElement.setAttribute('data-theme', 'light')

    schemeQuery.addEventListener('change', applyTheme)

    return () => {
      schemeQuery.removeEventListener('change', applyTheme)
    }
  }, [applyTheme, isDark, selectedTheme])

  return (
    <DropList
      position="right"
      slots={{
        button: (
          <SquareButton>
            <Palette size={18} strokeWidth={1} className="icon" />
          </SquareButton>
        ),
        list: (
          <>
            {ThemeModeList.map(({ type, ...props }, idx) => (
              <DropMenuItem
                onClick={() => {
                  setSelectedTheme(type)
                }}
                key={idx}
                {...props}
              />
            ))}
          </>
        ),
      }}
    />
  )
}
