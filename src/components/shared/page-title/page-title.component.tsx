'use client'

import { FC } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { ProgressBar } from '@/components/ui'

import { FontIcon, GlassesIcon } from '@/components/icons'

import styles from './page-title.module.scss'

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Flex align="center" content="space-between">
      <h1 className={styles.heading}>{title}</h1>

      <Flex align="center" className={styles.actions}>
        <button className={cn(styles.text, styles.contrast)}>
          <GlassesIcon />
          Increase contrast
        </button>

        <div className={styles.divider} />

        <Flex align="center" className={styles.size}>
          <FontIcon />

          <label className={cn(styles.text, styles.label)}>Font size</label>

          <ProgressBar percent={75} maxWidth={100} />
        </Flex>
      </Flex>
    </Flex>
  )
}
