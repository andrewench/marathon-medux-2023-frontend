import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import { Flex } from '../flex/flex.layout'

import styles from './tabs.module.scss'

export const Tabs: FC<PropsWithClassNameAndChildren> = ({
  className,
  children,
}) => {
  return (
    <Flex align="center" className={cn(styles.box, className)}>
      {children}
    </Flex>
  )
}
