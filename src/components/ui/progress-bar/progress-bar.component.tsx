import { FC } from 'react'

import { type IProgressBar } from './progress-bar.interface'

import styles from './progress-bar.module.scss'

export const ProgressBar: FC<IProgressBar> = ({ percent, maxWidth }) => {
  return (
    <div className={styles.box}>
      <div className={styles.track} />
      <button className={styles.drag} />
    </div>
  )
}
