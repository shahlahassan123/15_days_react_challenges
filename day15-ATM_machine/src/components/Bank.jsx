import React from 'react'
import {makeDeposit} from './../features/balanceSlice'
import { useDispatch , useSelector } from 'react-redux'
import { useState } from 'react'


const Bank = () => {
    const dispatch = useDispatch()
    const [deposit,setDeposit] = useState('')
   


    let d = deposit
    const handleDeposit = () => {
  
        
        setDeposit('')
        dispatch(makeDeposit(d))
       

    }

        
       
    
  return (
    <div className='bank'>
        <h1>Bank</h1>
        <div className="bank-container">
        <label>Make a deposit : </label>
        <input type='number' placeholder='Make a deposit' value={deposit}  onChange={e=>setDeposit(e.target.value)} required></input>
        <button onClick={handleDeposit}>Confirm</button>
        </div>
      
    </div>
  )
}

export default Bank
