'use client'

import { FC, useRef } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'

import { useActions, useOutside } from '@/shared/hooks'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import { type IDrawer } from './drawer.interface'

import styles from './drawer.module.scss'

export const Drawer: FC<PropsWithClassNameAndChildren<IDrawer>> = ({
  position,
  children,
  className,
}) => {
  const { toggleSideBar } = useActions()

  const wrapRef = useRef<HTMLDivElement>(null)

  useOutside(wrapRef, () => {
    toggleSideBar()
  })

  return (
    <motion.div
      initial={{ translateX: '-100%' }}
      animate={{ translateX: 0 }}
      exit={{ translateX: '-100%' }}
      transition={{ duration: 0.3 }}
      ref={wrapRef}
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
