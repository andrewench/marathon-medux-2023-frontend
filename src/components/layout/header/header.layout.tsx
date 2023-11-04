'use client'

import { Menu } from 'lucide-react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import cn from 'clsx'

import { HeaderProfile, Logo } from '@/components/layout'

import { SearchField } from '@/components/ui'

import { useActions, useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import styles from './header.module.scss'

export const Header: FC = () => {
  const methods = useForm<{ search: string }>({
    mode: 'onChange',
  })

  const { sideBar } = useAppSelector(app)

  const { toggleSideBar } = useActions()

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

        <button
          onClick={() => {
            toggleSideBar()
          }}
          className={styles.mobileMenu}
        >
          <Menu size={24} className="icon" />
        </button>

        <FormProvider {...methods}>
          <form className={styles.searchBox}>
            <SearchField<{ search: string }>
              type="text"
              field="search"
              placeholder="Search patients or doctors"
              className={cn(styles.search, {
                [styles.minimized]: !sideBar.isOpen,
              })}
            />
          </form>
        </FormProvider>
      </div>

      <HeaderProfile />
    </header>
  )
}
