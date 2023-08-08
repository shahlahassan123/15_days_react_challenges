import React from 'react'

import { useDispatch , useSelector } from 'react-redux'

const Transaction = () => {
  let transaction = useSelector(state => state.transactions.value)


  transaction = transaction?.slice(2)

  return (
    <div className='transaction'>
      <h1>Transaction History</h1>
      {transaction?.map((ele,index)=>
      <div key={index}>
            <p>{ele.Type} : {ele.Amount} | Balance : {ele.Balance} | Date: {ele.Time} </p>   
      </div>
      )}

    </div>
  )
}

export default Transaction
