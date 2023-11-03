import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import styles from './heading.module.scss'

export const Heading: FC<PropsWithClassNameAndChildren> = ({
  children,
  className,
}) => {
  return <h1 className={cn(styles.text, className)}>{children}</h1>
}
