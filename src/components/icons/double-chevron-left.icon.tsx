import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassName } from '@/shared/types'

export const DoubleChevronLeftIcon: FC<PropsWithClassName> = ({
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#414d55"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
    >
      <path d="m11 17-5-5 5-5" />
      <path d="m18 17-5-5 5-5" />
    </svg>
  )
}
