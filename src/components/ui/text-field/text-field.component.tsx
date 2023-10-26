import { useMemo } from 'react'
import { FieldValues, Path, useFormContext } from 'react-hook-form'

import cn from 'clsx'

import { PropsWithClassName } from '@/shared/types'

export interface ITextField<T extends FieldValues> extends PropsWithClassName {
  type: 'text' | 'password'
  field: Path<T>
  placeholder: string
}

export const TextField = <T extends FieldValues>({
  field,
  placeholder,
  type,
  className,
}: ITextField<T>) => {
  const { register } = useFormContext<T>()

  const overrideRegister = useMemo(
    () => ({
      ...register(field, { required: true }),
      onChange: () => {},
    }),
    [field, register],
  )

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(className)}
      {...overrideRegister}
    />
  )
}
