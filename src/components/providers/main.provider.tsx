import { FC, PropsWithChildren } from 'react'

import { StoreProvider } from './store.provider'
import { ThemeProvider } from './theme.provider'

import '@/assets/styles/global.scss'

export const MainProvider: FC<PropsWithChildren> = ({ children }) => (
  <StoreProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </StoreProvider>
)
