import { Mic } from 'lucide-react'
import { FC } from 'react'

import cn from 'clsx'

import { type IEmergencyHelp } from './emergency-help.interface'

import styles from './emergency-help.module.scss'

export const EmergencyHelp: FC<IEmergencyHelp> = ({ notify }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.notify]: notify,
      })}
    >
      <Mic size={20} strokeWidth={2} />
    </button>
  )
}
