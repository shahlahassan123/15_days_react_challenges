
import './App.css';
import {useReducer} from 'react';

function App() {

  const initialState = {
    r:0,
    b:0,
    g:0
  }

  const randomNumber = ()=> Math.floor(Math.random() * 255 + 0)

  const reducer = (state) =>{
    return {
      ...state,
      r : randomNumber(),
      g : randomNumber(),
      b : randomNumber() 
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className = "colorBackground"
    onClick = {()=> dispatch()}
    style = {{backgroundColor : `rgb(${state.r}, ${state.g}, ${state.b})`}}
    >
   
    </div>
    
  );
}

export default App;
