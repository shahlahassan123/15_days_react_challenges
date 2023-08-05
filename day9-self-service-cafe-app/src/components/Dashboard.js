import React, {useContext} from 'react'
import { dashboardContext} from "./../App"

const Dashboard = () => {
    const {dashboard} = useContext(dashboardContext);
  return (
    <div style={{display:"flex",flexDirection:"column", border : "1px solid black",padding :"1rem", margin : "1rem" }}>
        <h3>Takings :$ {dashboard.takings}</h3>
        <h3>Customers : {dashboard.customers}</h3>   
    </div>
  )
}

export default Dashboard
