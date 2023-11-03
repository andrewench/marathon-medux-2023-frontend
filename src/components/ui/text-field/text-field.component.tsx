import { useId, useMemo } from 'react'
import { FieldValues, useFormContext } from 'react-hook-form'

import cn from 'clsx'

import { type ITextField } from './text-field.interface'

import styles from './text-field.module.scss'

export const TextField = <T extends FieldValues>({
  field,
  placeholder,
  label,
  type,
  autoComplete,
  className,
}: ITextField<T>) => {
  const labelId = useId()

  const {
    register,
    formState: { errors },
  } = useFormContext<T>()

  const overrideRegister = useMemo(
    () => ({
      ...register(field),
      onChange: () => {},
    }),
    [field, register],
  )

  return (
    <div>
      <label htmlFor={labelId} className={styles.label}>
        {label}
      </label>

      <input
        id={labelId}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={cn(styles.field, className)}
        {...overrideRegister}
      />

      {errors && errors[field]?.message && (
        <p className={styles.errorLabel}>{errors[field]?.message as string}</p>
      )}
    </div>
  )
}
