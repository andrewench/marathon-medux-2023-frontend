import { type TThemeMode } from '@/shared/types'

export interface IAppState {
  sideBar: {
    isOpen: boolean
  }
  themeMode: TThemeMode
}
