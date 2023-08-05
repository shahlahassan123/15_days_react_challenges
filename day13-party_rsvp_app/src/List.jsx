import React from 'react'

const List = ({rspv}) => {
  return (
    <div className='rspv'>
       {rspv && 
       <ul>
        {rspv.map((item,index)=>(
            <li key={index}>{item.name} : {item.category}</li>
        ))}
       </ul>
        }
      
    </div>
  )
}

export default List
