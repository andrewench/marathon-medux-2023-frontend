'use client'

import { FC } from 'react'
import SimpleBar from 'simplebar-react'

import { Divider } from '@/components/shared'

import { Block } from '../block/block.layout'
import { Flex } from '../flex/flex.layout'
import { UpcommingAppointmentItem } from '../upcomming-appointment-item/upcomming-appointment-item.layout'
import { WeekBar } from '../week-bar/week-bar.layout'

import styles from './upcomming-appointments.module.scss'

export const UpcommingAppointments: FC = () => {
  return (
    <Block
      title="Upcomming appointments"
      slot={<div></div>}
      className={styles.box}
    >
      <button className={styles.calendarOpener}>
        <p className={styles.text}>September - October</p>
      </button>

      <WeekBar />

      <SimpleBar className={styles.scrollBar}>
        <Flex direction="column" className="gap-3">
          <UpcommingAppointmentItem />

          <Divider />

          <UpcommingAppointmentItem />

          <Divider />

          <UpcommingAppointmentItem />

          <Divider />

          <UpcommingAppointmentItem />

          <Divider />

          <UpcommingAppointmentItem />

          <Divider />

          <UpcommingAppointmentItem />

          <Divider />

          <UpcommingAppointmentItem />

          <Divider />

          <UpcommingAppointmentItem />

          <Divider />

          <UpcommingAppointmentItem />

          <Divider />

          <UpcommingAppointmentItem />

          <Divider />

          <UpcommingAppointmentItem />

          <Divider />

          <UpcommingAppointmentItem />

          <Divider />

          <UpcommingAppointmentItem />
        </Flex>
      </SimpleBar>
    </Block>
  )
}
