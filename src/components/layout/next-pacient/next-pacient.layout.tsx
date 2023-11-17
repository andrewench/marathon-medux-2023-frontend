'use client'

import styles from './next-pacient.module.scss'

import {
  Clock4,
  MoreHorizontal,
  Phone,
  PhoneIncoming,
  PhoneOff,
} from 'lucide-react'
import { FC } from 'react'

import cn from 'clsx'

import { Avatar } from '@/components/shared'

import { ButtonSlider, DropMenuItem, SquareButton } from '@/components/ui'

import { Block } from '../block/block.layout'
import { DropList } from '../drop-list/drop-list.layout'
import { Flex } from '../flex/flex.layout'

export const NextPacient: FC = () => {
  return (
    <Block title="Next patient" slot={<ButtonSlider />}>
      <div className={styles.notify} />

      <Flex align="center" className={styles.metaBox}>
        <Avatar src="/user_2.png" alt="Avatar" />

        <div className={styles.meta}>
          <p className={styles.userName}>Polly Paul</p>
          <p className={styles.appointmentName}>USG + Consultation</p>
        </div>

        <button className={cn('flex-center-center', styles.acceptCall)}>
          <Phone size={18} strokeWidth={1.5} className={styles.phoneIcon} />
        </button>
      </Flex>

      <div className={styles.divider} />

      <Flex align="center">
        <Clock4 size={18} strokeWidth={1.5} className={styles.clockIcon} />

        <p className={styles.callCreatedAt}>09:30</p>

        <DropList
          position="right"
          slots={{
            button: (
              <SquareButton className={styles.menu}>
                <MoreHorizontal
                  size={18}
                  strokeWidth={1.25}
                  className={styles.menuIcon}
                />
              </SquareButton>
            ),
            list: (
              <>
                <DropMenuItem
                  label="Accept a call"
                  icon={<PhoneIncoming size={18} strokeWidth={1.5} />}
                />
                <DropMenuItem
                  label="Reject a call"
                  icon={<PhoneOff size={18} strokeWidth={1.5} />}
                />
              </>
            ),
          }}
          className={styles.menu}
        />
      </Flex>
    </Block>
  )
}
