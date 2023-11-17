import Image from 'next/image'

import { FC } from 'react'

import { IAvatar } from './avatar.interface'

import styles from './avatar.module.scss'

export const Avatar: FC<IAvatar> = ({ src, alt }) => {
  return (
    <div className={styles.avatar}>
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        quality={100}
        draggable={false}
      />
    </div>
  )
}
