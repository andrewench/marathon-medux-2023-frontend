import { FC } from 'react'

import cn from 'clsx'

import { PageIndicator } from '@/components/shared'

import { roboto, rubik } from '@/shared/fonts'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import { Header } from '../header/header.layout'
import { SideBar } from '../sidebar/sidebar.layout'

import '@/assets/styles/global.scss'

import styles from './page.module.scss'

export const PageLayout: FC<PropsWithClassNameAndChildren> = ({
  children,
  className,
}) => {
  return (
    <html lang="en" data-theme="light" data-font-zoom="1">
      <body className={cn(rubik.variable, roboto.variable, className)}>
        <div className={cn(styles.page, 'page')}>
          <PageIndicator />

          <Header />

          <div className={styles.content}>
            <SideBar />

            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
