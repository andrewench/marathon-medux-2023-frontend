import { type PropsWithClassNameAndChildren } from '@/shared/types'

export type TFlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
export type TFlexMainAxis = 'start' | 'center' | 'end'
export type TFlexCrossAxis =
  | TFlexMainAxis
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type TFlex = PropsWithClassNameAndChildren<
  Partial<{
    align: TFlexMainAxis
    content: TFlexCrossAxis
    direction: TFlexDirection
    as: keyof JSX.IntrinsicElements
  }>
>
