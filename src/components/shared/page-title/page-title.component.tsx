'use client'

import { Glasses, SlidersHorizontal, Type } from 'lucide-react'
import { FC } from 'react'

import cn from 'clsx'

import { DropMenu, Flex } from '@/components/layout'

import { DropMenuItem, FontZoomer, SquareButton } from '@/components/ui'

import styles from './page-title.module.scss'

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Flex align="center" content="space-between" className={styles.box}>
      <h1 className={styles.heading}>{title}</h1>

      <div className={styles.actions}>
        <button className={styles.contrast}>
          <Glasses size={20} strokeWidth={1} className="icon" />
          Increase contrast
        </button>

        <div className={styles.divider} />

        <FontZoomer />
      </div>

      <div className={cn('drop-menu', styles.filter)}>
        <div className="drop-button">
          <SquareButton>
            <SlidersHorizontal size={20} strokeWidth={1} className="icon" />
          </SquareButton>
        </div>

        <DropMenu position="right">
          <DropMenuItem
            label="Increase contrast"
            icon={<Glasses size={20} strokeWidth={1} className="icon" />}
          />
          <DropMenuItem
            label="Font size"
            icon={<Type size={20} strokeWidth={1} className="icon" />}
          />
        </DropMenu>
      </div>
    </Flex>
  )
}
