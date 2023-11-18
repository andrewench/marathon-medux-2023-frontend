import { MessageSquare } from 'lucide-react'
import { FC } from 'react'

import { BadgeButton } from '@/components/ui'

import { Flex } from '../flex/flex.layout'

import { IQuestionItem } from './question-item.interface'

import styles from './question-item.module.scss'

export const QuestionItem: FC<IQuestionItem> = ({ title }) => {
  return (
    <div>
      <Flex as="p" align="center" className={styles.date}>
        <span>14 JUN 2019</span>
        <span>/</span>
        <span>01:05 PM</span>
      </Flex>

      <Flex align="center" content="space-between">
        <h1 className={styles.title}>{title}</h1>
        <button className={styles.comments}>
          <MessageSquare size={20} strokeWidth={1.25} />
        </button>
      </Flex>

      <Flex className="mt-3 gap-3">
        <BadgeButton>Read more</BadgeButton>
        <BadgeButton>Reply</BadgeButton>
      </Flex>
    </div>
  )
}
