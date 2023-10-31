import { FC } from 'react'

import cn from 'clsx'

import { roboto, rubik } from '@/shared/fonts'

import { PropsWithClassNameAndChildren } from '@/shared/types'

export const DocumentLayout: FC<PropsWithClassNameAndChildren> = ({
  children,
  className,
}) => {
  return (
    <html lang="en" data-theme="light">
      <body className={cn(rubik.variable, roboto.variable, className)}>
        {children}
      </body>
    </html>
  )
}
