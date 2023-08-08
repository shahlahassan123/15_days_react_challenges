import React from 'react'
import { useState, useEffect } from 'react'
import ATM from './components/ATM'
import Balance from './components/Balance'
import Bank from './components/Bank'
import Transaction from './components/Transaction'
import { useDispatch , useSelector } from 'react-redux'
import {addTransactions, formatTransactionDate} from './features/transactionSlice'

const App = () => {

  const balance = useSelector((state) => state.bank.value)
  
  const transactionDate = useSelector(state => state.transactions.date)
  const transaction = useSelector(state => state.transactions.value)
  const dispatch = useDispatch()
  const type =  useSelector((state) => state.bank.type)
  const amount = useSelector(state=>state.bank.amount)

  useEffect(()=>{
    dispatch(formatTransactionDate(Date.now()))
    dispatch(addTransactions({Type: type,'Amount' : amount, 'Balance' : balance , 'Time': transactionDate }))
  }, [balance, type])

  return (
    <div className='app'>
      <Balance />
      <ATM />
      <Bank />
    {type &&   <Transaction />}
      
    </div>
  )
}

export default App
