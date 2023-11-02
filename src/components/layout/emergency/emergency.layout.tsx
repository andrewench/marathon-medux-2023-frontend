'use client'

import { FC } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { EmergencyHelp } from '@/components/ui'

import { useAppSelector } from '@/shared/hooks'

import { PropsWithClassName } from '@/shared/types'

import { app } from '@/store/slices'

import styles from './emergency.module.scss'

const EmergencyLabel: FC = () => <p className={styles.help}>Emergency Help</p>

export const Emergency: FC<PropsWithClassName<{ responsive?: boolean }>> = ({
  responsive,
  className,
}) => {
  const { sideBar } = useAppSelector(app)

  return (
    <Flex
      align="center"
      className={cn(
        styles.emergency,
        {
          [styles.minimized]: !sideBar.isOpen && responsive,
        },
        className,
      )}
    >
      <EmergencyHelp notify />

      {responsive ? sideBar.isOpen && <EmergencyLabel /> : <EmergencyLabel />}
    </Flex>
  )
}
