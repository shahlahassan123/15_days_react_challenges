import React, {useState} from 'react'
import Items from './components/Items'
import Status from './components/Status'
import Trashcan from './components/Trashcan'


const App = () => {
  let products = ['banana peel', 'beer can', 'apple core', 'chip packet']
  const [items,setItems] = useState(products)
  const [dragStatus, setDragStatus] = useState('Not Dragging')

  const dragStart = e =>{
    e.dataTransfer.setData("text", e.target.textContent)
    setDragStatus("Drag Started")
  }

  const allowDrop = e =>{
    e.preventDefault()
    setDragStatus("Allow Drop");
  }

  const drop = e =>{
    let itemDropped =e.dataTransfer.getData("text")
    setDragStatus(`${itemDropped} Dropped`);
    let newItems = items.filter(ele=>ele !== itemDropped)
    setItems(newItems)

  }

  return (
    <div className='app'>
      <Status dragStatus={dragStatus} />
      <Items  items={items} dragStart={dragStart} />
      <Trashcan allowDrop={allowDrop} drop={drop}/>
    </div>
  )
}

export default App
