import { ReactNode } from 'react'

import { PropsWithClassName } from '@/shared/types'

export interface IPacientItem extends PropsWithClassName {
  data: {
    avatar: {
      src: string
      alt: string
    }
    userName: string
    appointment: string
  }
  onClick?: () => void
  withDivider?: boolean
  slots?: {
    meta?: ReactNode
  }
}
