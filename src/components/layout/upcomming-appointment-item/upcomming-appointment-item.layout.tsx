import { Euro } from 'lucide-react'
import { FC } from 'react'

import { Flex } from '../flex/flex.layout'
import { PacientItem } from '../pacient-item/pacient-item.layout'

import styles from './upcomming-appointment-item.module.scss'

export const UpcommingAppointmentItem: FC = () => {
  return (
    <div className={styles.box}>
      <PacientItem
        data={{
          avatar: {
            src: '/user_3.png',
            alt: 'Avatar',
          },
          userName: 'Shawon Hampton',
          appointment: 'Emergency appointment',
        }}
        slots={{
          meta: (
            <Flex align="center" className={styles.price}>
              <Euro size={18} strokeWidth={1.5} />

              <p className={styles.value}>25</p>
            </Flex>
          ),
        }}
        className="gap-4"
      />
    </div>
  )
}
