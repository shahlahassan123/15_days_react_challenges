import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 300,
  type : '',
  amount : 0
}

export const balanceSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    withdrawfifty: (state) => {
        if(state.value >=50){
            state.value -= 50
            state.type = 'Withdraw'
            state.amount = 50
        }
    },
    withdrawHundred: (state) => {
    if(state.value >=100){
        state.value -= 100
        state.type = 'Withdraw'
        state.amount = 100
    }
    },
    withdrawByAmount: (state, action) => {
        if(state.value >=action.payload){
            state.value -= action.payload
            state.type = 'Withdraw'
            state.amount = Number(action.payload)
        }
    },
    makeDeposit: (state, action) => {
       
            state.value += Number(action.payload)
            state.type = 'Deposit'
            state.amount = Number(action.payload)
        
    },
  },
})


export const { withdrawfifty, withdrawHundred, withdrawByAmount , makeDeposit } = balanceSlice.actions

export default balanceSlice.reducer


