import Image from 'next/image'

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
      <Image
        src="/icons/microphone.svg"
        alt="Microphone Icon"
        width={14}
        height={20}
        quality={100}
        draggable={false}
      />
    </button>
  )
}
