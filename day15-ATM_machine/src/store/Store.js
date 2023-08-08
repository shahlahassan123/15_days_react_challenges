import { configureStore } from '@reduxjs/toolkit'
import balanceReducer from '../features/balanceSlice'
import transactionReducer from '../features/transactionSlice'

export const store = configureStore({
  reducer: {
    bank: balanceReducer,
    transactions : transactionReducer
  },
})
