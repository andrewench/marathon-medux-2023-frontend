import { FC } from 'react'

import { Block } from '../block/block.layout'

import styles from './recent-questions.module.scss'

export const RecentQuestions: FC = () => {
  return (
    <Block title="Recent questions" slot={<div></div>} className={styles.box}>
      Content
    </Block>
  )
}
