import React from 'react'

const Trashcan = ({allowDrop, drop}) => {
  return (
    <div className='trashcan' onDragOver={e=>allowDrop(e)} onDrop={e=>drop(e)}>
        <img className = 'trash' src='src/assets/trashcan.png' alt='trash_can' ></img> 
    </div>
  )
}

export default Trashcan
