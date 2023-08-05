import {useState} from 'react'

function App() {
  const [state,setState] = useState({question: "What is your name",
                                     answer: "My name is Shahla Hassan"})


  return (
    
      <div className='inputBox'
       onClick={()=>{setState({question : state.answer, answer : state.question})}}
       style={{padding: "1rem", border:"1rem solid white" , fontSize : "1rem",backgroundColor:"black", color:"white"}}>
        <p>{state.question}</p>
      </div>
    
    
  );
}

export default App;
