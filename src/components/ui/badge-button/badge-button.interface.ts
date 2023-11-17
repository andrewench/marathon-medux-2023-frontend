import { ReactNode } from 'react'

import { PropsWithClassNameAndChildren } from '@/shared/types'

export interface IBadgeButton extends PropsWithClassNameAndChildren {
  onClick?: () => void
  icon?: ReactNode
}
