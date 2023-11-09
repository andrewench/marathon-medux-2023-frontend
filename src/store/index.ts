import { configureStore } from '@reduxjs/toolkit'

import { authApi, userApi } from '@/store/api'

import { appReducer, userReducer } from './slices'

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([authApi.middleware, userApi.middleware]),
})
