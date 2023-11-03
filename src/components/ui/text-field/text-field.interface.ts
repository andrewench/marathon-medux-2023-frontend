import type { FieldValues, Path } from 'react-hook-form'

import { type PropsWithClassName } from '@/shared/types'

export interface ITextField<T extends FieldValues> extends PropsWithClassName {
  type: 'text' | 'password'
  field: Path<T>
  label: string
  placeholder: string
  autoComplete?: 'on' | 'off'
}
