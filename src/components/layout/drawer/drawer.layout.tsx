'use client'

import { FC } from 'react'

import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import { type IDrawer } from './drawer.interface'

import styles from './drawer.module.scss'

export const Drawer: FC<PropsWithClassNameAndChildren<IDrawer>> = ({
  position,
  children,
  className,
}) => {
  return (
    <motion.div
      initial={{ translateX: '-100%' }}
      animate={{ translateX: 0 }}
      exit={{ translateX: '-100%' }}
      transition={{ duration: 0.3 }}
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
    </motion.div>
  )
}
