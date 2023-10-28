import { RefObject } from 'react'

export interface ISlider {
  maxWidth: number
  wrap: RefObject<HTMLDivElement>
  percent: number
}
