import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassName } from '@/shared/types'

import styles from './divider.module.scss'

export const Divider: FC<PropsWithClassName> = ({ className }) => {
  return <div className={cn(styles.divider, className)} />
}
