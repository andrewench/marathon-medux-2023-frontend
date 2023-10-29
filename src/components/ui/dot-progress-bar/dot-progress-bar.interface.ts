export type TPoint = {
  percent: number
  onClick: () => void
  label?: string
  isDefault?: boolean
}

export interface IDotProgressBar {
  maxWidth: number
  points: TPoint[]
}
