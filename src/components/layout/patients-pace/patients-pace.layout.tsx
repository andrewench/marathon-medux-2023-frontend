'use client'

import { FC } from 'react'

import cn from 'clsx'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'

import { Constants } from '@/shared/constants'

import { Block } from '../block/block.layout'
import { Flex } from '../flex/flex.layout'

import { PacientsPaceData } from './patients-pace.data'

import styles from './patients-pace.module.scss'

export const PatientsPace: FC = () => {
  return (
    <Block title="Patients pace" slot={<div></div>}>
      <ResponsiveContainer width={356} height={100}>
        <AreaChart data={PacientsPaceData}>
          <defs>
            <linearGradient id="pace-line-one" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={Constants.colors.ELECTRO + '14'}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={Constants.colors.ELECTRO + '14'}
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="pace-line-two" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={Constants.colors.GREEN + '14'}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={Constants.colors.GREEN + '14'}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            strokeWidth={3}
            dataKey="pacient_1"
            dot={false}
            stroke={Constants.colors.ELECTRO}
            fillOpacity={1}
            fill="url(#pace-line-one)"
            strokeLinecap="round"
          />
          <Area
            type="monotone"
            strokeWidth={3}
            dataKey="pacient_2"
            dot={false}
            strokeLinecap="round"
            fillOpacity={1}
            fill="url(#pace-line-two)"
            stroke={Constants.colors.GREEN}
          />
        </AreaChart>
      </ResponsiveContainer>

      <Flex align="center" className="gap-3">
        <Flex as="p" className={styles.text}>
          <span className={cn(styles.marker, styles.green)} />
          New patients
        </Flex>

        <Flex as="p" className={styles.text}>
          <span className={cn(styles.marker, styles.cyan)} />
          Return patients
        </Flex>
      </Flex>
    </Block>
  )
}
