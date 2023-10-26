import { FC } from 'react'

import cn from 'clsx'

import { Header } from '@/components/layout'

import styles from './dashboard.module.scss'

const Page: FC = () => {
  return (
    <div className={cn(styles.page, 'page')}>
      <Header />
    </div>
  )
}

export default Page
