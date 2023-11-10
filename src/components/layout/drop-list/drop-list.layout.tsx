import { FC } from 'react'

import { DropMenu } from '@/components/layout'

import { IDropList } from './drop-list.interface'

import styles from './drop-list.module.scss'

export const DropList: FC<IDropList> = ({ slots, position }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.button}>{slots.button}</div>

      <DropMenu position={position}>{slots.list}</DropMenu>
    </div>
  )
}
