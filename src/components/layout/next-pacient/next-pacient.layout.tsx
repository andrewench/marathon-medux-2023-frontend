'use client'

import styles from './next-pacient.module.scss'

import { FC } from 'react'

import { ButtonSlider } from '@/components/ui'

import { Block } from '../block/block.layout'
import { PacientItem } from '../pacient-item/pacient-item.layout'

export const NextPacient: FC = () => {
  return (
    <Block title="Next patient" slot={<ButtonSlider />}>
      <div className={styles.notify} />

      <PacientItem
        data={{
          avatar: {
            src: '/assets/images/user_2.png',
            alt: 'Avatar',
          },
          userName: 'Polly Paul',
          appointment: 'USG + Consultation',
        }}
        withDivider
      />
    </Block>
  )
}
