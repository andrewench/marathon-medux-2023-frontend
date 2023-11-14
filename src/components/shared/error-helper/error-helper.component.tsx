import { FC, PropsWithChildren } from 'react'

import styles from './error-helper.module.scss'

export const ErrorHelper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.box}>{children}</div>
}
