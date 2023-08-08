import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
    const balance = useSelector(state=>state.bank.value)
  return (
    <div className='balanceAmount'>
       {balance ?
       <h1> Balance is : ${balance}</h1> :
       <h1> Balance is : 0</h1>
       }
      
    </div>
  )
}

export default Balance
