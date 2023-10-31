'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { Avatar } from '@/components/shared'

import { SearchField, ThemeSwitcher } from '@/components/ui'

import { BellIcon, ChevronDownIcon } from '@/components/icons'

import { useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import styles from './header.module.scss'

export const Header: FC = () => {
  const methods = useForm<{ search: string }>({
    mode: 'onChange',
  })

  const { sideBar } = useAppSelector(app)

  return (
    <header
      className={cn(styles.header, {
        [styles.minimized]: !sideBar.isOpen,
      })}
    >
      <div
        className={cn(styles.left, {
          [styles.minimized]: !sideBar.isOpen,
        })}
      >
        <Link href="/dashboard" draggable={false} className={styles.link}>
          <Image
            src="/logo.svg"
            width={164}
            height={42}
            alt="Medux Logo"
            priority={true}
            draggable={false}
            className={cn(styles.original, styles.logo, {
              [styles.hide]: !sideBar.isOpen,
            })}
          />

          <Image
            src="/logo-mini.svg"
            width={41}
            height={42}
            alt="Medux Logo"
            priority={true}
            draggable={false}
            className={cn(styles.logo, {
              [styles.hide]: sideBar.isOpen,
            })}
          />
        </Link>

        <FormProvider {...methods}>
          <form className={styles.searchBox}>
            <SearchField<{ search: string }>
              type="text"
              field="search"
              placeholder="Search patients or doctors"
              className={styles.search}
            />
          </form>
        </FormProvider>
      </div>

      <Flex align="center" className={styles.profile}>
        <ThemeSwitcher />

        <button className={cn('header-button', styles.button, styles.notify)}>
          <BellIcon />
        </button>

        <Avatar />

        <div>
          <p className={styles.username}>Nicholas Doyle</p>
          <p className={styles.specialty}>Surgeon</p>
        </div>

        <button className={cn('header-button', styles.button, styles.drop)}>
          <ChevronDownIcon />
        </button>
      </Flex>
    </header>
  )
}
