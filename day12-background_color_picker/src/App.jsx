import { useEffect , useRef} from 'react'
import './App.css'
import ColorDropdown from './ColorDropdown'

function App() {

  // useEffect(()=>{
  //   document.body.style.backgroundColor = 'red'
  // },[])

  const bodyRef = useRef(document.body)

  return (
    <div >
     <ColorDropdown  ref={bodyRef} />
    </div>
    
  )
}

export default App
