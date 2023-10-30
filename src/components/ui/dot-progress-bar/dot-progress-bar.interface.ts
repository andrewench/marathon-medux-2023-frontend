import { type TZoomValue } from '@/shared/types'

export type TPoint = {
  zoomValue: TZoomValue
  percent: number
  onClick: () => void
  label?: string
  isDefault?: boolean
}

export interface IDotProgressBar {
  currentPercent: number
  maxWidth: number
  points: TPoint[]
}
