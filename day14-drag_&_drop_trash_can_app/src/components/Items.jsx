import React from 'react'

const Items = ({items,dragStart}) => {
    
  return (
    <div className='items'>
        {items.length >0 ? 
         items.map((item,index)=>{
            return(
                <div key={index} id={`item${index}`} className='item' draggable= 'true' onDragStart={e=>dragStart(e)}>{item}</div>
            )
        })
        
        : <p>All items moved to trash.</p>}
       
      
    </div>
  )
}

export default Items
