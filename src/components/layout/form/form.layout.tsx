'use client'

import { FieldValues, FormProvider } from 'react-hook-form'

import cn from 'clsx'

import { type IFormLayout } from './form.interface'

export const Form = <T extends FieldValues>({
  methods,
  onSubmit,
  children,
  className,
}: IFormLayout<T>) => {
  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
        className={cn(className)}
      >
        {children}
      </form>
    </FormProvider>
  )
}
