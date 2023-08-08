import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  date: ''
}

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransactions: (state, action) => {
        state.value.push(action.payload)
        
    },
    formatTransactionDate : (state, action) =>{
        let date =  new Date(action.payload)
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const year = String(date.getFullYear()).slice(-2);
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            state.date = `${month}/${day}/${year} ${hours}:${minutes}`;
          
    }
  },
})


export const { addTransactions , formatTransactionDate} = transactionSlice.actions

export default transactionSlice.reducer