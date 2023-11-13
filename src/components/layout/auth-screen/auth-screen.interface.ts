import { ReactNode } from 'react'

export interface IAuthScreen {
  homeUrl: string
  heading: string
  slots: {
    helpers: ReactNode
  }
}
