import { ReactNode } from 'react'

export interface IDropMenuItem {
  label: string
  icon: ReactNode
  selected?: boolean
  onClick?: () => void
}
