import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'

import { PropsWithClassNameAndChildren } from '@/shared/types'

export interface IFormLayout<T extends FieldValues>
  extends PropsWithClassNameAndChildren {
  methods: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
}
