import { FC } from 'react'

import styles from './page-indicator.module.scss'

export const PageIndicator: FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.progress} />
    </div>
  )
}
