import React, { useContext } from 'react'
import {cartContext,priceContext, dashboardContext} from "./../App"

const PayButton = () => {

    const {setCart} = useContext(cartContext)
    const {price,setPrice} = useContext(priceContext)
    const {dashboard, setDashboard} = useContext(dashboardContext);

    const handlePayment = ()=>{
        setDashboard({...dashboard , takings : price + dashboard.takings , customers : dashboard.customers + 1})
        setPrice(0.00)
        setCart([])
    }


  return (
    <div>
        <h1>Pay Bill</h1>
        <button onClick={()=>handlePayment()}>Pay</button>
      
    </div>
  )
}

export default PayButton
