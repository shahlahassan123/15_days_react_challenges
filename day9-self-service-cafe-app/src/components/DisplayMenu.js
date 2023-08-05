import React, {useContext} from 'react'
import {cartContext,priceContext} from "./../App"



const DisplayMenu = (props) => {

    let menu = props.menu

    let foodMenu = menu.filter((ele)=>ele.id ===0);
  
    let drinkMenu = menu.filter((ele)=>ele.id ===1);

    const {cart,setCart} = useContext(cartContext)
    const {price,setPrice} = useContext(priceContext)



    const handleAddToCart = ele =>{
        setCart([...cart, {name : ele.name , price : ele.price}])
        setPrice(price + ele.price)
    }
    console.log("c",cart)

  return (
    <div className='menu' style={{display: 'flex', flexDirection:"row"}}>
        <div className='food-menu'>
            {foodMenu.map((ele,ind)=>{
                return(
                    <div className='item' key={ind} style={{display:"flex",flexDirection:"column", border : "1px solid black",padding :"1rem",
                    margin:"1rem"}}>
                        <p>{ele.name}</p>
                        <p>${ele.price}</p>
                        <button onClick={()=>handleAddToCart(ele)}>Add</button>
                    </div>
                )
            })}
        </div>
        <div className='drink-menu'>
            {drinkMenu.map((ele,ind)=>{
                return(
                    <div className='item' key={ind} style={{display:"flex",flexDirection:"column", border : "1px solid black", padding :"1rem",
                    margin:"1rem"}}>
                        <p>{ele.name}</p>
                        <p>${ele.price}</p>
                        <button onClick={()=>handleAddToCart(ele)}>Add</button>
                    </div>
                )
            })}
        </div>

      
    </div>
  )
}

export default DisplayMenu
