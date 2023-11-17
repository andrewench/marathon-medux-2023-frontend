import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassName } from '@/shared/types'

import { DropMenu } from '../drop-menu/drop-menu.component'

import { IDropList } from './drop-list.interface'

import styles from './drop-list.module.scss'

export const DropList: FC<PropsWithClassName<IDropList>> = ({
  slots,
  position,
  className,
}) => {
  return (
    <div className={cn(styles.menu, className)}>
      <div className={styles.wrap} />

      <div className={styles.button}>{slots.button}</div>

      <DropMenu position={position}>{slots.list}</DropMenu>
    </div>
  )
}
