'use client'

import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassNameAndChildren } from '@/shared/types'

export const SquareButton: FC<
  PropsWithClassNameAndChildren<{ onClick?: () => void }>
> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn('button flex-center-center', className)}
    >
      {children}
    </button>
  )
}
