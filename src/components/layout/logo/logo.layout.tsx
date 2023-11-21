'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

import cn from 'clsx'

import { StaticLogo } from '@/components/layout'

import { useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import styles from './logo.module.scss'

export const Logo: FC<{ responsive?: boolean }> = ({ responsive }) => {
  const { sideBar } = useAppSelector(app)

  return (
    <Link
      href="/dashboard"
      draggable={false}
      className={cn(styles.link, {
        [styles.hide]: responsive,
      })}
    >
      <StaticLogo
        className={cn(styles.original, styles.logo, {
          [styles.hide]: !sideBar.isOpen && responsive,
        })}
      />

      {responsive && (
        <Image
          src="/assets/images/logo-mini.svg"
          width={41}
          height={42}
          alt="Medux Logo"
          priority={true}
          draggable={false}
          className={cn(styles.logo, {
            [styles.hide]: sideBar.isOpen,
          })}
        />
      )}
    </Link>
  )
}
