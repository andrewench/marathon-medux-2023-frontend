import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { TRootState, User } from '@/shared/types'

import { IUserState } from './user-slice.interface'

const initialState: IUserState = {
  profile: {} as User,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.profile = action.payload
    },
  },
})

export const { actions: userActions, reducer: userReducer } = userSlice

export const user = (state: TRootState) => state.user
