import { type PropsWithClassNameAndChildren } from '@/shared/types'

export interface IPrimaryButton extends PropsWithClassNameAndChildren {
  type: 'button' | 'submit'
  onClick?: () => void
}
