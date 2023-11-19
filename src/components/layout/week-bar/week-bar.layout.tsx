import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FC, useState } from 'react'

import { WeekBarItem } from '@/components/ui'

import { Flex } from '../flex/flex.layout'

import { WeekList } from './week-bar.data'

import styles from './week-bar.module.scss'

export const WeekBar: FC = () => {
  const [weekDay, setWeekDay] = useState<number>(0)

  return (
    <Flex align="center" content="space-between" className={styles.weekBar}>
      <button className={styles.switcher}>
        <ChevronLeft size={18} strokeWidth={1.5} />
      </button>

      {WeekList.map((item, idx) => (
        <WeekBarItem
          index={item.weekDayIndex}
          day={item.day}
          weekDay={item.weekDay}
          currentWeekDay={weekDay}
          isNotify={item.isNotify}
          onClick={() => {
            setWeekDay(item.weekDayIndex)
          }}
          key={idx}
        />
      ))}

      <button className={styles.switcher}>
        <ChevronRight size={18} strokeWidth={1.5} />
      </button>
    </Flex>
  )
}
