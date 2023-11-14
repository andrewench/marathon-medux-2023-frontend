import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TRootState } from '@/shared/types'

import { type IAppState } from './app-slice.interface'

const initialState: IAppState = {
  sideBar: {
    isOpen: false,
  },
  isGlobalFetching: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSideBar: state => {
      state.sideBar.isOpen = !state.sideBar.isOpen
    },
    setFetching: (state, action: PayloadAction<boolean>) => {
      state.isGlobalFetching = action.payload
    },
  },
})

export const { actions: appActions, reducer: appReducer } = appSlice

export const app = (state: TRootState) => state.app
