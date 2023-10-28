import { FC } from 'react'

import cn from 'clsx'

import { MicrophoneIcon } from '@/components/icons'

import { type IEmergencyHelp } from './emergency-help.interface'

import styles from './emergency-help.module.scss'

export const EmergencyHelp: FC<IEmergencyHelp> = ({ notify }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.notify]: notify,
      })}
    >
      <MicrophoneIcon />
    </button>
  )
}
