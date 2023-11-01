import { FC } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { PropsWithClassName } from '@/shared/types'

import { type IDropMenuItem } from './drop-menu-item.interface'

import styles from './drop-menu-item.module.scss'

export const DropMenuItem: FC<PropsWithClassName<IDropMenuItem>> = ({
  label,
  icon,
  onClick,
  className,
}) => {
  return (
    <li className={cn(className)}>
      <button onClick={onClick} className={styles.button}>
        <Flex align="center" content="center" className={styles.iconBox}>
          {icon}
        </Flex>

        {label}
      </button>
    </li>
  )
}
