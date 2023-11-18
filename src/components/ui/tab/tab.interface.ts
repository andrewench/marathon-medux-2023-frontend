import { PropsWithChildren } from 'react'

import { StateAction } from '@/shared/types'

export interface ITab extends PropsWithChildren {
  index: number
  currentTab: number
  setTab: StateAction<number>
  onClick?: () => void
}
