'use client'

import Image from 'next/image'

import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassName } from '@/shared/types'

export const StaticLogo: FC<PropsWithClassName> = ({ className }) => {
  return (
    <Image
      src="/assets/images/logo.svg"
      alt="Medux Logo"
      width={164}
      height={42}
      priority={true}
      quality={100}
      draggable={false}
      className={cn(className)}
    />
  )
}
