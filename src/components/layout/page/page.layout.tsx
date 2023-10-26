import { FC } from 'react'

import cn from 'clsx'

import { PageIndicator } from '@/components/shared'

import { roboto, rubik } from '@/shared/fonts'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import '@/assets/styles/global.scss'

export const PageLayout: FC<PropsWithClassNameAndChildren> = ({
  children,
  className,
}) => {
  return (
    <html lang="en" data-theme="light">
      <body className={cn(rubik.variable, roboto.variable, className)}>
        <PageIndicator />

        {children}
      </body>
    </html>
  )
}
