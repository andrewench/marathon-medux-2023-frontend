import { FC, PropsWithChildren } from 'react'

import cn from 'clsx'

import { type IDrawer } from './drawer.interface'

import styles from './drawer.module.scss'

export const Drawer: FC<PropsWithChildren<IDrawer>> = ({
  position,
  children,
}) => {
  return (
    <div
      className={cn(styles.box, {
        [styles.left]: position === 'left',
        [styles.right]: position === 'right',
      })}
    >
      {children}
    </div>
  )
}
