import { useMemo } from 'react'
import { FieldValues, useFormContext } from 'react-hook-form'

import cn from 'clsx'

import { type ITextField } from './text-field.interface'

import styles from './text-field.module.scss'

export const TextField = <T extends FieldValues>({
  field,
  placeholder,
  type,
  autoComplete,
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
      autoComplete={autoComplete}
      className={cn(styles.field, className)}
      {...overrideRegister}
    />
  )
}
