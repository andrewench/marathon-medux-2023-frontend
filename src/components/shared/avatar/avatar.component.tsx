import Image from 'next/image'

import { FC } from 'react'

import styles from './avatar.module.scss'

export const Avatar: FC = () => {
  return (
    <div className={styles.avatar}>
      <Image
        src="/avatar.png"
        alt="Avatar"
        width={40}
        height={40}
        quality={100}
        draggable={false}
      />
    </div>
  )
}
