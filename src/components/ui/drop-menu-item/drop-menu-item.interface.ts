import { ReactNode } from 'react'

export interface IDropMenuItem {
  label: string
  icon: ReactNode
  onClick?: () => void
}
