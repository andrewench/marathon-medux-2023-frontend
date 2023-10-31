import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TRootState, TThemeMode } from '@/shared/types'

import { type IAppState } from './app-slice.interface'

const initialState: IAppState = {
  sideBar: {
    isOpen: false,
  },
  themeMode: 'light',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSideBar: state => {
      state.sideBar.isOpen = !state.sideBar.isOpen
    },
    setThemeMode: (state, action: PayloadAction<TThemeMode>) => {
      state.themeMode = action.payload
    },
  },
})

export const { actions: appActions, reducer: appReducer } = appSlice

export const app = (state: TRootState) => state.app
