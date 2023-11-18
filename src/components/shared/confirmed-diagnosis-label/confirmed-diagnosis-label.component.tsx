import { FC } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { IConfirmedDiagnosisLabel } from './confirmed-diagnosis-label.interface'

import styles from './confirmed-diagnosis.module.scss'

export const ConfirmedDiagnosisLabel: FC<IConfirmedDiagnosisLabel> = ({
  name,
  currentValue,
  maxValue,
}) => {
  return (
    <Flex align="center" content="space-between">
      <p className={cn(styles.label, styles.text)}>
        <span className={cn(styles.text, styles.value)}>{currentValue}</span> of{' '}
        <span className={cn(styles.text, styles.value)}>{maxValue}</span>
      </p>

      <p className={styles.text}>{name}</p>
    </Flex>
  )
}
