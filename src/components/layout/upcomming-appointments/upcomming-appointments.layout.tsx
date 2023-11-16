import { FC } from 'react'

import { Block } from '../block/block.layout'

import styles from './upcomming-appointments.module.scss'

export const UpcommingAppointments: FC = () => {
  return (
    <Block
      title="Upcomming appointments"
      slot={<div></div>}
      className={styles.box}
    >
      <p className="text-neutral-500">Content</p>
    </Block>
  )
}
