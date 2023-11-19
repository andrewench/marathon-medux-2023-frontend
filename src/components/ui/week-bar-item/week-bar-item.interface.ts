export interface IWeekBarItem {
  day: number
  weekDay: string
  currentWeekDay: number
  index: number
  onClick?: () => void
  isNotify?: boolean
}
