'use client'

import { FC } from 'react'

import { Flex } from '@/components/layout'

import { FontZoomer } from '@/components/ui'

import { GlassesIcon } from '@/components/icons'

import styles from './page-title.module.scss'

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Flex align="center" content="space-between">
      <h1 className={styles.heading}>{title}</h1>

      <Flex align="center" className={styles.actions}>
        <button className={styles.contrast}>
          <GlassesIcon />
          Increase contrast
        </button>

        <div className={styles.divider} />

        <FontZoomer />
      </Flex>
    </Flex>
  )
}
