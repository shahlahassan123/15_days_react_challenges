import React from 'react'
import { withdrawHundred, withdrawfifty , withdrawByAmount } from './../features/balanceSlice'
import { useDispatch , useSelector } from 'react-redux'
import { useState , useEffect } from 'react'


const ATM = () => {


   const dispatch = useDispatch()
 

   const type =  useSelector((state) => state.bank.type)
   const balance = useSelector(state=>state.bank.value)
  

   const [amount, setAmount]= useState('')
   const [value, setValue] = useState(null)

    let d
    const withdrawFiftys = () =>{
      if(balance ===0){
        return
      }
      dispatch(withdrawfifty()) 
      setValue(50)   
    }

    const withdrawHundreds = () =>{
      if(balance ===0){
        return
      }
      dispatch(withdrawHundred()) 
      setValue(100)    
    }

    const withdrawAmounts = () =>{
      if(balance ===0){
        return
      }
      dispatch(withdrawByAmount(amount))   
      setValue(amount) 
      setAmount('')
    }




  return (
    <div className='atm'>
        <h3>ATM Machine</h3>
        <div className="btns">
         <button
          aria-label="Withdraw 50"
          onClick={withdrawFiftys}
        >
          Withdraw 50
        </button>
        <button
          aria-label="Withdraw 100"
          onClick={withdrawHundreds}
        >
         Withdraw 100
        </button>
        <button>
            Withdraw by Amount
        </button>
        <div className="custom">
        <input type='number' value={amount} required placeholder='Enter amount' onChange={e=>setAmount(e.target.value)}></input>
        <button onClick={withdrawAmounts}> Confirm</button>
        </div>
        </div>
    </div>
  )
}

export default ATM
