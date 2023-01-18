import { configureStore } from '@reduxjs/toolkit'
import CartSlice from '../ReduxSlices/CartSlice'

export const store = configureStore({
  reducer: {
    allCart: CartSlice,
  },
})