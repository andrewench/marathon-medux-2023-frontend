import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from './slices'

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
})
