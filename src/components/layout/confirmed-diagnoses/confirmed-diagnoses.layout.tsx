'use client'

import { FC, useState } from 'react'

import { ConfirmedDiagnosisLabel } from '@/components/shared'

import { ButtonSlider, ProgressBar, Tab } from '@/components/ui'

import { Constants } from '@/shared/constants'

import { Block } from '../block/block.layout'
import { Flex } from '../flex/flex.layout'
import { Tabs } from '../tabs/tabs.layout'

import { ConfirmedDiagnosisData } from './confirmed-diagnoses.data'

import styles from './confirmed-diagnoses.module.scss'

export const ConfirmedDiagnoses: FC = () => {
  const [tab, setTab] = useState<number>(0)

  return (
    <Block
      title="Confirmed diagnoses"
      slot={<ButtonSlider />}
      className={styles.box}
    >
      <Tabs className="mt-3 gap-[2px]">
        <Tab index={0} currentTab={tab} setTab={setTab}>
          Year
        </Tab>
        <Tab index={1} currentTab={tab} setTab={setTab}>
          Month
        </Tab>
        <Tab index={2} currentTab={tab} setTab={setTab}>
          Week
        </Tab>
      </Tabs>

      <Flex direction="column" className="mt-6 gap-5">
        {ConfirmedDiagnosisData.map(({ label, bar }, idx) => (
          <div key={idx}>
            <ConfirmedDiagnosisLabel
              currentValue={label.currentValue}
              maxValue={label.maxValue}
              name={label.name}
            />
            <ProgressBar
              variant="horizontal"
              percent={bar.percent}
              maxWidth={bar.maxWidth}
              color={bar.color}
            />
          </div>
        ))}
      </Flex>
    </Block>
  )
}
