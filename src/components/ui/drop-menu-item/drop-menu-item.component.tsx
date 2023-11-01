import { FC } from 'react'

import { Flex } from '@/components/layout'

import { type IDropMenuItem } from './drop-menu-item.interface'

import styles from './drop-menu-item.module.scss'

export const DropMenuItem: FC<IDropMenuItem> = ({ label, icon, onClick }) => {
  return (
    <li>
      <button onClick={onClick} className={styles.button}>
        <Flex align="center" content="center" className={styles.iconBox}>
          {icon}
        </Flex>

        {label}
      </button>
    </li>
  )
}
