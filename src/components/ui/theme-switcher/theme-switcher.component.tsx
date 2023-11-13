'use client'

import { Palette } from 'lucide-react'
import { FC, useEffect, useState } from 'react'

import { DropList } from '@/components/layout/drop-list/drop-list.layout'

import { DropMenuItem } from '@/components/ui/drop-menu-item/drop-menu-item.component'
import { SquareButton } from '@/components/ui/square-button/square-button.component'

import { Constants } from '@/shared/constants'

import { useStorage } from '@/shared/hooks'

import { TThemeMode } from '@/shared/types'

import { ThemeModeList } from './theme-switcher.data'

export const ThemeSwitcher: FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<TThemeMode | 'none'>(
    'none',
  )

  const { storage, updateStorage } = useStorage(Constants.storage.NAME)

  useEffect(() => {
    if (selectedTheme === 'none') return

    updateStorage(Constants.storage.NAME, {
      ...storage,
      theme: selectedTheme,
    })
  }, [selectedTheme, storage, updateStorage])

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
                onClick={() => setSelectedTheme(type)}
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
