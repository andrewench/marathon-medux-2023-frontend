import { FC, PropsWithChildren } from 'react'

import { StoreProvider } from './store.provider'

import '@/assets/styles/global.scss'

export const MainProvider: FC<PropsWithChildren> = ({ children }) => (
  <StoreProvider>{children}</StoreProvider>
)
