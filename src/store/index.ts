import { configureStore } from '@reduxjs/toolkit'

import { authApi } from '@/store/api'

import { appReducer } from './slices'

export const store = configureStore({
  reducer: {
    app: appReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([authApi.middleware]),
})
