import { ReactNode } from 'react'

export interface IDropList {
  slots: {
    button: ReactNode
    list: ReactNode
  }
  position: 'left' | 'right'
}
