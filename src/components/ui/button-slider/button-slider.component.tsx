'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FC } from 'react'

import { Flex } from '@/components/layout'

import styles from './button-slider.module.scss'

export const ButtonSlider: FC = () => {
  return (
    <Flex align="center" className={styles.box}>
      <button className={styles.button}>
        <ChevronLeft size={20} strokeWidth={1.25} />
      </button>
      <button className={styles.button}>
        <ChevronRight size={20} strokeWidth={1.25} />
      </button>
    </Flex>
  )
}
