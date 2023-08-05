import React, { useState } from 'react'

const App = () => {
  let drinksObject =[
    { name: 'Mojito', price: 3 },
    { name: 'Beer', price: 2 },
    { name: 'Red Wine', price: 1 },
    { name: 'White Wine', price: 1 },
    { name: 'Gin & Tonic', price: 8 },
    { name: 'Tequila Shot', price: 1 },
]

const [drinks,setDrinks] = useState(drinksObject);
const [bill,setBill] = useState(0);


const handleAdd = (price) =>{
  setBill(bill+price)  
}

const handleBill = () =>{
  setBill(0)
}

  return (
    <div className ="app" style={{display: "flex", flexDirection : "row"}}>
     
      <div>
      
      {drinks.map((ele,index)=>{
        return(
          <div className='drink' key={index} style={{display: "flex", flexDirection : "row", padding : "3rem"}}>
            <p style={{margin : "3rem"}}>{ele.name}</p>
            <p style={{margin : "3rem"}}>${ele.price}</p>
            <button onClick={()=>handleAdd(ele.price)} style={{margin : "3rem"}}>Add to Cart</button>
          </div>
        )
      })}

      </div>
     

      <div className='cart' style={{padding : "3rem"}}>
        <h3>Bill Amount</h3>
        <p>${bill}</p>
        <button onClick={()=>handleBill()}>Pay Bill</button>
      </div>
      
      
    </div>
  )
}

export default App
