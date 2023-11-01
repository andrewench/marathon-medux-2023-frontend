import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import { type IDropMenu } from './drop-menu.interface'

import styles from './drop-menu.module.scss'

export const DropMenu: FC<PropsWithClassNameAndChildren<IDropMenu>> = ({
  children,
  position,
  className,
}) => {
  return (
    <ul
      className={cn(
        styles.box,
        {
          [styles.left]: position === 'left',
          [styles.right]: position === 'right',
        },
        className,
      )}
    >
      {children}
    </ul>
  )
}
