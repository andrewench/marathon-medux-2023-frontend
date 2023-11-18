'use client'

import { FC, useState } from 'react'
import SimpleBar from 'simplebar-react'

import { Divider } from '@/components/shared'

import { Tab } from '@/components/ui'

import { Block } from '../block/block.layout'
import { Flex } from '../flex/flex.layout'
import { QuestionItem } from '../question-item/question-item.layout'
import { Tabs } from '../tabs/tabs.layout'

import styles from './recent-questions.module.scss'

export const RecentQuestions: FC = () => {
  const [tab, setTab] = useState<number>(0)

  return (
    <Block title="Recent questions" slot={<div></div>} className={styles.box}>
      <Tabs className={styles.tabs}>
        <Tab
          index={0}
          currentTab={tab}
          setTab={setTab}
          classNames={{
            button: styles.button,
            active: styles.active,
          }}
        >
          All
        </Tab>

        <Tab
          index={1}
          currentTab={tab}
          setTab={setTab}
          classNames={{
            button: styles.button,
            active: styles.active,
          }}
        >
          Unread
        </Tab>

        <Tab
          index={2}
          currentTab={tab}
          setTab={setTab}
          classNames={{
            button: styles.button,
            active: styles.active,
          }}
        >
          New
        </Tab>
      </Tabs>

      <SimpleBar className={styles.scrollBar}>
        <Flex direction="column" className={styles.questions}>
          <QuestionItem title="Addiction blood bank bone marrow contagious disinfectants?" />

          <Divider />

          <QuestionItem title="Triggered asthma anesthesia blood type bone marrow cartilage?" />

          <Divider />

          <QuestionItem title="Addiction blood bank bone marrow contagious disinfectants?" />

          <Divider />

          <QuestionItem title="Triggered asthma anesthesia blood type bone marrow cartilage?" />

          <Divider />

          <QuestionItem title="Addiction blood bank bone marrow contagious disinfectants?" />

          <Divider />

          <QuestionItem title="Triggered asthma anesthesia blood type bone marrow cartilage?" />

          <Divider />

          <QuestionItem title="Addiction blood bank bone marrow contagious disinfectants?" />

          <Divider />

          <QuestionItem title="Triggered asthma anesthesia blood type bone marrow cartilage?" />

          <Divider />

          <QuestionItem title="Addiction blood bank bone marrow contagious disinfectants?" />

          <Divider />

          <QuestionItem title="Triggered asthma anesthesia blood type bone marrow cartilage?" />

          <Divider />

          <QuestionItem title="Addiction blood bank bone marrow contagious disinfectants?" />

          <Divider />

          <QuestionItem title="Triggered asthma anesthesia blood type bone marrow cartilage?" />
        </Flex>
      </SimpleBar>
    </Block>
  )
}
