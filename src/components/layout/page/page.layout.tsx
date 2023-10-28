import { FC } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { PageIndicator } from '@/components/shared'

import { roboto, rubik } from '@/shared/fonts'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import { Header } from '../header/header.layout'
import { SideBar } from '../sidebar/sidebar.layout'

import '@/assets/styles/global.scss'

export const PageLayout: FC<PropsWithClassNameAndChildren> = ({
  children,
  className,
}) => {
  return (
    <html lang="en" data-theme="light">
      <body className={cn(rubik.variable, roboto.variable, className)}>
        <div className="page">
          <PageIndicator />

          <Header />

          <Flex>
            <SideBar />

            {children}
          </Flex>
        </div>
      </body>
    </html>
  )
}
