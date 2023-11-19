import { Clock4, MoreHorizontal, Phone, Plus } from 'lucide-react'
import { FC } from 'react'

import cn from 'clsx'

import { Avatar, Divider } from '@/components/shared'

import { DropMenuItem, SquareButton } from '@/components/ui'

import { DropList } from '../drop-list/drop-list.layout'
import { Flex } from '../flex/flex.layout'

import { IPacientItem } from './pacient-item.interface'

import styles from './pacient-item.module.scss'

export const PacientItem: FC<IPacientItem> = ({
  data,
  onClick,
  withDivider,
  slots,
  className,
}) => {
  return (
    <Flex direction="column" className={cn(styles.box, className)}>
      <Flex align="center" className={styles.metaBox}>
        <Avatar src={data.avatar.src} alt={data.avatar.alt} />

        <div className={styles.meta}>
          <p className={styles.userName}>{data.userName}</p>
          <p className={styles.appointmentName}>{data.appointment}</p>
        </div>

        <button
          onClick={onClick}
          className={cn('flex-center-center', styles.acceptCall)}
        >
          <Phone size={18} strokeWidth={1.5} className={styles.phoneIcon} />
        </button>
      </Flex>

      {withDivider && <Divider className="mt-4 mb-2" />}

      <Flex align="center" className="gap-3">
        <Flex align="center">
          <Clock4 size={18} strokeWidth={1.5} className={styles.clockIcon} />

          <p className={styles.callCreatedAt}>09:30</p>
        </Flex>

        {slots && slots.meta && slots.meta}

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
                  icon={<Plus size={18} strokeWidth={1.5} />}
                />
                <DropMenuItem
                  label="Reject a call"
                  icon={<Plus size={18} strokeWidth={1.5} />}
                />
              </>
            ),
          }}
          className={styles.menu}
        />
      </Flex>
    </Flex>
  )
}
