import {useState, createRef} from 'react';

import './App.css'

function App() {
  const [text, setText] = useState('');

  const inputRef = createRef();

  function handleChange(){
    let value = inputRef.current.value;
    setText(value.toUpperCase());
  }

  return (
    <div className="App">
      <h5>Please Shout!</h5>
      <input type="text"
       placeholder="Enter text"
       style={{width : "50%", border : "2px solid blue", height:"2rem", margin:"2rem"}}
       ref={inputRef}
       onChange = {handleChange}
       ></input>
      <p>{text}</p>
      
    </div>
  );
}

export default App;
