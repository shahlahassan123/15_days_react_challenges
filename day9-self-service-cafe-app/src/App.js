import React, { createContext, useState } from 'react'
import DisplayMenu from './components/DisplayMenu.js'
import Cart from "./components/Cart.js"
import TotalPrice from "./components/TotalPrice.js"
import PayButton from './components/PayButton.js';
import Dashboard from './components/Dashboard.js';

const cartContext = createContext();
const priceContext = createContext();
const dashboardContext = createContext();

const App = () => {

  let menuItems = {
    items: [
      { name: 'Filter Coffee', price: 2, id:0 },
      { name: 'Hot Chocolate', price: 3, id:0  },
      { name: 'Cappuccino', price: 2.50, id:0  },
      { name: 'Orange Juice', price: 2, id:0  },
      { name: 'Sparkling Water', price: 1.50, id:0  },
      { name: 'Lemonade / Cola', price: 2, id:0  },
      { name: 'Salmon Bagel', price: 7, id:1 },
      { name: 'Grilled Cheese', price: 4.50, id:1 },
      { name: 'Tomato Soup', price: 4, id:1 },
      { name: 'Bean Burrito', price: 6, id:1 },
      { name: 'Spinach Pie', price: 7, id:1 },
      { name: 'Daily Special', price: 7, id:1 },
  ]
}


  const [menu] = useState(menuItems.items);

  

  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0.00)
  const [dashboard, setDashboard] = useState({takings : 0.00, customers : 0})



  return (
    <div className='App' style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <cartContext.Provider value={{ cart, setCart }} >
        <priceContext.Provider value={{ price, setPrice }}>
          <dashboardContext.Provider value={{ dashboard, setDashboard }}>
            <DisplayMenu menu={menu}></DisplayMenu>
            <Cart></Cart>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between", padding:"1rem", margin: "1rem"}}>
            <TotalPrice></TotalPrice>
            <PayButton></PayButton>
            <Dashboard></Dashboard>

            </div>
            
          </dashboardContext.Provider>
        </priceContext.Provider>
      </cartContext.Provider>

      
      
    </div>
  )
}

export default App
export {cartContext, priceContext, dashboardContext}