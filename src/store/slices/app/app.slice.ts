import { createSlice } from '@reduxjs/toolkit'

import { type TRootState } from '@/shared/types'

import { type IAppState } from './app-slice.interface'

const initialState: IAppState = {
  sideBar: {
    isOpen: false,
  },
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

export const { actions: appActions, reducer: appReducer } = appSlice

export const app = (state: TRootState) => state.app
