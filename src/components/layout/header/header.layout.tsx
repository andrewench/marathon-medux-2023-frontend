'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Avatar } from '@/components/shared'

import { SearchField } from '@/components/ui'

import { BellIcon, ChevronDownIcon } from '@/components/icons'

import { Flex } from '../flex/flex.layout'

import styles from './header.module.scss'

export const Header: FC = () => {
  const methods = useForm<{ search: string }>({
    mode: 'onChange',
  })

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/dashboard" draggable={false} className={styles.link}>
          <Image
            src="/logo.svg"
            width={164}
            height={42}
            alt="Medux Logo"
            priority={true}
            draggable={false}
            className={styles.logo}
          />
        </Link>

        <FormProvider {...methods}>
          <form>
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
        <button className={styles.button}>
          <BellIcon />
        </button>

        <Avatar />

        <div>
          <p className={styles.username}>Nicholas Doyle</p>
          <p className={styles.specialty}>Surgeon</p>
        </div>

        <button className={styles.button}>
          <ChevronDownIcon />
        </button>
      </Flex>
    </header>
  )
}
