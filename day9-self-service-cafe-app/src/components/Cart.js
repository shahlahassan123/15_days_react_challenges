import React, {useContext} from 'react'
import {cartContext} from "./../App"

const Cart = () => {

const {cart} = useContext(cartContext)




  return (
    <div className='Cart' style={{display:"flex",flexDirection:"column", border : "1px solid black",padding :"1rem",margin: "1rem",
     width : "15rem"}}>
        <h1>Cart</h1>

        {cart && cart.map((ele, ind)=>{
            return(
                <div className='cart-item' key={ind} style={{display:"flex",flexDirection:"row",justifyContent:"space-between",
                 border : "1px solid black",padding :"1rem",
                margin:"1rem"}}>
                    <p>{ele.name}</p>
                    <p>${ele.price}</p>
                </div>
            )
        })}


      
    </div>
  )
}

export default Cart
