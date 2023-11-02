'use client'

import { FC } from 'react'

import cn from 'clsx'

import { DropMenu, Flex } from '@/components/layout'

import { DropMenuItem, FontZoomer, SquareButton } from '@/components/ui'

import { FilterIcon, FontIcon, GlassesIcon } from '@/components/icons'

import styles from './page-title.module.scss'

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Flex align="center" content="space-between" className={styles.box}>
      <h1 className={styles.heading}>{title}</h1>

      <div className={styles.actions}>
        <button className={styles.contrast}>
          <GlassesIcon />
          Increase contrast
        </button>

        <div className={styles.divider} />

        <FontZoomer />
      </div>

      <div className={cn('drop-menu', styles.filter)}>
        <div className="drop-button">
          <SquareButton>
            <FilterIcon />
          </SquareButton>
        </div>

        <DropMenu position="right">
          <DropMenuItem label="Increase contrast" icon={<GlassesIcon />} />
          <DropMenuItem label="Font size" icon={<FontIcon />} />
        </DropMenu>
      </div>
    </Flex>
  )
}
