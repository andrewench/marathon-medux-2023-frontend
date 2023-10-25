import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'

import styles from './header.module.scss'

export const Header: FC = () => {
  return (
    <header>
      <Link href="/dashboard" draggable={false} className={styles.link}>
        <Image
          src="/logo.svg"
          width={164}
          height={42}
          alt="Medux Logo"
          draggable={false}
        />
      </Link>
    </header>
  )
}
