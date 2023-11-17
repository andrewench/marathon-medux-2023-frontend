'use client'

import { FC } from 'react'

import { ProgressBar } from '@/components/ui'

import { Block } from '../block/block.layout'
import { Flex } from '../flex/flex.layout'

import { overralAppointmentList } from './overall-appointment.data'

import styles from './overall-appointment.module.scss'

export const OverallAppointment: FC = () => {
  return (
    <Block title="Overall appointment">
      <Flex content="space-between" className="mt-3">
        {overralAppointmentList.map((item, idx) => (
          <Flex direction="column" align="center" key={idx}>
            <ProgressBar
              variant="vertical"
              percent={item.percent}
              maxWidth={75}
            />
            <p className={styles.label}>{item.hour}:00</p>
          </Flex>
        ))}
      </Flex>
    </Block>
  )
}
