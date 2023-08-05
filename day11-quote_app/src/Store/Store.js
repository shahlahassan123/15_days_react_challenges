import { configureStore } from '@reduxjs/toolkit'
import quotesReducer from './../features/quoteSlice'

export const store = configureStore({
  reducer: {
    quotes: quotesReducer
  },
})