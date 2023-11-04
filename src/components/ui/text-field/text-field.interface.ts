import type { FieldValues, Path } from 'react-hook-form'

import { type PropsWithClassName } from '@/shared/types'

export interface ITextField<T extends FieldValues> extends PropsWithClassName {
  type: 'text' | 'password'
  field: Path<T>
  placeholder: string
  label?: string
  autoComplete?: 'on' | 'off'
}
