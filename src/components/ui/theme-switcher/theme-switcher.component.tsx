'use client'

import { Palette } from 'lucide-react'
import { FC } from 'react'

import cn from 'clsx'

import styles from './theme-switcher.module.scss'

export const ThemeSwitcher: FC = () => {
  return (
    <button onClick={() => {}} className={cn('button', styles.button)}>
      <Palette size={18} strokeWidth={1} className="icon" />
    </button>
  )
}
