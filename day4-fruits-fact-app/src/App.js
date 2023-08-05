import './App.css';
import {useReducer} from 'react';

function App() {
  const initialState = {
    fruits : [
      {name : "Banana", fact : "I am yellow"},
      {name : "Peach", fact : "I am peach"},
      {name : "Apple", fact : "I am red"}
    ],
    showFruits : false,
    buttonMessage : "Show fruits and its facts",
    buttonAnswer : "I am bored now."
  
  }

  function reducer(state){
    return {
      ...state,
      showFruits : !state.showFruits
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   <>
   <button className="fruitsBtn" onClick = {()=>{dispatch()}}>{state.showFruits ? state.buttonAnswer : state.buttonMessage}</button>
   <div className='results'
   style ={{display: 'flex', flexDirection : "row", margin:"1rem"}}
   >
     {state.showFruits && state.fruits.map((ele, index)=> {
      return(
      <div key = {index} className='fruitsBox' style={{border : "1px solid green", height :"10rem", width:"7rem" , padding: "1rem"}}> 
        <p >{ele.name}</p>
        <p>{ele.fact}</p>
      </div>)})}
   </div>
   </>
    
  );
}

export default App;
