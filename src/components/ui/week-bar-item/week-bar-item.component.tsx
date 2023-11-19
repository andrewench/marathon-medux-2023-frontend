import { FC } from 'react'

import cn from 'clsx'

import { IWeekBarItem } from './week-bar-item.interface'

import styles from './week-bar-item.module.scss'

export const WeekBarItem: FC<IWeekBarItem> = ({
  day,
  index,
  currentWeekDay,
  weekDay,
  onClick,
  isNotify = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.button, {
        [styles.selected]: currentWeekDay === index,
        [styles.notify]: isNotify,
      })}
    >
      <p className={styles.day}>{day}</p>
      <p className={styles.weekDay}>{weekDay}</p>
    </button>
  )
}
