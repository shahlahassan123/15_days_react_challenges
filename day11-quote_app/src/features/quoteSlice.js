import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const quoteSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    setQuotes: (state, action) => {
      return action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setQuotes } = quoteSlice.actions

export default quoteSlice.reducer