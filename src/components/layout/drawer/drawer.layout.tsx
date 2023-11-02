import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import { type IDrawer } from './drawer.interface'

import styles from './drawer.module.scss'

export const Drawer: FC<PropsWithClassNameAndChildren<IDrawer>> = ({
  position,
  children,
  className,
}) => {
  return (
    <div
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
    </div>
  )
}
