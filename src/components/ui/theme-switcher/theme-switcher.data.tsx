import { Contrast, Laptop2, Moon, Sun } from 'lucide-react'
import { ReactNode } from 'react'

import { TThemeMode } from '@/shared/types'

interface IThemeMode {
  label: string
  icon: ReactNode
  type: TThemeMode
}

export const ThemeModeList: IThemeMode[] = [
  {
    label: 'Light',
    icon: <Sun size={22} strokeWidth={1.5} className="icon" />,
    type: 'light',
  },
  {
    label: 'Dark',
    icon: <Moon size={20} strokeWidth={1.25} className="icon" />,
    type: 'dark',
  },
  {
    label: 'System',
    icon: <Laptop2 size={20} strokeWidth={1.25} className="icon" />,
    type: 'system',
  },
  {
    label: 'High contrast',
    icon: <Contrast size={20} strokeWidth={1.25} className="icon" />,
    type: 'high_contrast',
  },
]
