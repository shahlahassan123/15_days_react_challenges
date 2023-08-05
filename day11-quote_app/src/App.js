import React from 'react'
import Quotes from './Quotes.js'



const App = () => {
  return (
    <div style={{display: 'grid', placeItems: 'center'}}>
      <h1>Select the word and make your own quote</h1>
      <Quotes />
    </div>
  )
}

export default App
