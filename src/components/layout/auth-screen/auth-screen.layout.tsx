import Image from 'next/image'
import Link from 'next/link'

import { FC, PropsWithChildren } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { Heading } from '@/components/shared'

import { IAuthScreen } from './auth-screen.interface'

import styles from './auth-screen.module.scss'

export const AuthScreen: FC<PropsWithChildren<IAuthScreen>> = ({
  homeUrl,
  heading,
  slots,
  children,
}) => {
  return (
    <Flex className={cn('page', styles.page)}>
      <Flex direction="column" align="center" className={styles.section}>
        <Flex
          direction="column"
          content="space-between"
          className={styles.sectionContent}
        >
          <Link href={homeUrl} className={styles.homeLink}>
            <Image
              src="/logo.svg"
              alt="Medux Logo"
              width={162}
              height={42}
              quality={100}
              priority
              draggable={false}
              className={styles.logo}
            />
          </Link>

          <div className={styles.content}>
            <Heading className={styles.heading}>{heading}</Heading>

            {children}
          </div>

          {slots.helpers}
        </Flex>
      </Flex>

      <div className={cn(styles.section, styles.poster)} />
    </Flex>
  )
}
