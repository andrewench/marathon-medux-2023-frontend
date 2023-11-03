'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { MainProvider } from '@/components/providers'

import styles from './login.module.scss'

const LoginPage: FC = () => {
  return (
    <MainProvider>
      <Flex className={cn(styles.page, 'page')}>
        <div className={cn(styles.section, styles.formSection)}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Medux Logo"
              width={162}
              height={42}
              quality={100}
              draggable={false}
            />
          </Link>
        </div>

        <div className={cn(styles.section, styles.poster)} />
      </Flex>
    </MainProvider>
  )
}

export default LoginPage
