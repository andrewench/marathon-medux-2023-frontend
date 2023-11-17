'use client'

import { Link } from 'lucide-react'
import { Check, MoreHorizontal, Plus } from 'lucide-react'
import { FC } from 'react'

import {
  BadgeButton,
  ButtonSlider,
  DropMenuItem,
  SquareButton,
} from '@/components/ui'

import { Block } from '../block/block.layout'
import { DropList } from '../drop-list/drop-list.layout'
import { Flex } from '../flex/flex.layout'

import styles from './laboratory-tests.module.scss'

export const LaboratoryTests: FC = () => {
  return (
    <Block title="Laboratory tests" slot={<ButtonSlider />}>
      <Flex align="center" className="mt-2 gap-2">
        <Link size={14} strokeWidth={1.25} className={styles.icon} />

        <p className={styles.userName}>Nelle Pearson</p>
      </Flex>

      <Flex align="end" content="space-between" className="mt-1 mb-2">
        <h2 className={styles.testName}>
          Beta 2 Microglobulin (B2M) Tumor Marker Test
        </h2>

        <DropList
          position="right"
          slots={{
            button: (
              <SquareButton>
                <MoreHorizontal
                  size={18}
                  strokeWidth={1.25}
                  className={styles.icon}
                />
              </SquareButton>
            ),
            list: (
              <>
                <DropMenuItem
                  label="List item"
                  icon={<Plus size={22} strokeWidth={1.25} />}
                />
                <DropMenuItem
                  label="List item"
                  icon={<Plus size={22} strokeWidth={1.25} />}
                />
              </>
            ),
          }}
        />
      </Flex>

      <Flex align="center" className="mt-5 gap-3">
        <BadgeButton>Details</BadgeButton>
        <BadgeButton>Contact Patient</BadgeButton>

        <BadgeButton
          icon={<Check size={14} strokeWidth={1.25} />}
          className="ml-auto"
        >
          Archive
        </BadgeButton>
      </Flex>
    </Block>
  )
}
