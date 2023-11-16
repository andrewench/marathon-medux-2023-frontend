'use client'

import { FC } from 'react'

import { ButtonSlider } from '@/components/ui'

import { Block } from '../block/block.layout'

import styles from './confirmed-diagnoses.module.scss'

export const ConfirmedDiagnoses: FC = () => {
  return (
    <Block
      title="Confirmed diagnoses"
      slot={<ButtonSlider />}
      className={styles.box}
    >
      <p className="text-neutral-500">Content</p>
    </Block>
  )
}
