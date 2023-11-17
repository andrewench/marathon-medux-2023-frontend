import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import { Flex } from '../flex/flex.layout'

import { IBlock } from './block-layout.interface'

import styles from './block.module.scss'

export const Block: FC<PropsWithClassNameAndChildren<IBlock>> = ({
  title,
  slot,
  className,
  children,
}) => {
  return (
    <div className={cn(styles.box, className)}>
      <Flex align="center" content="space-between">
        <h1 className={styles.title}>{title}</h1>

        {slot && slot}
      </Flex>

      {children}
    </div>
  )
}
