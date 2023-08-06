import React from 'react'

const Status = ({dragStatus}) => {
  return (
    <div className='status'>
        {dragStatus &&
          <h5>Status is : {dragStatus}</h5>
        } 
    </div>
  )
}

export default Status
