'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import cn from 'clsx'

import { HeaderProfile, Logo } from '@/components/layout'

import { SearchField } from '@/components/ui'

import { MenuIcon } from '@/components/icons'

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
        <Logo responsive />

        <button className={styles.mobileMenu}>
          <MenuIcon />
        </button>

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

      <HeaderProfile />
    </header>
  )
}
