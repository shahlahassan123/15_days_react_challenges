import React from 'react'

const SelectedText = ({words}) => {



  return (
    <div>
      {words.length>0 ?
    <p><b>{words.join(" ")}</b></p>
      :
      <p><b>No Words Selected</b></p>
    }
    </div>
  )
}

export default SelectedText
