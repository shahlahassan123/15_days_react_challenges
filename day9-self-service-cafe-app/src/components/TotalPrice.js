import React, { useContext } from 'react'
import {priceContext} from './../App.js'

const TotalPrice = () => {
    const {price} = useContext(priceContext)
  return (
    <div className='total-price'>
        <h2>Total Price</h2>
        <h4>${price}</h4>
      
    </div>
  )
}

export default TotalPrice
