import "./App.css"
import { useState } from 'react'

function App() {

const [state, setState] = useState({pets : [{}]});

// let initialState = [{
//   // op : " ",
//   // petName : " ",
//   // ownerName : " ",
//   // illiness : " "
// }]


// const reducer = (state, action)=>{

 
//   let e = action.payload;
//   // let m = e.target[0].find(ele=> ele.selected === true)
//   // console.log(e)
//   // console.log(e.target[0].value)
//   e.preventDefault();

 

//    let addedState = {
//     ...state,
//     op : e.target[0].value,
//     petName : e.target[1].value,
//     ownerName : e.target[2].value,
//     illiness : e.target[3].value,
//    }

//    state.push(addedState)
  
//    console.log(state)
//    return state;

// }


// const [state, dispatch] = useReducer(reducer, initialState)


// console.log("state", state)

function handleSubmit(e){
  e.preventDefault();
  let addedState = {
        ...state.pets,
        op : e.target[0].value,
        petName : e.target[1].value,
        ownerName : e.target[2].value,
        illiness : e.target[3].value,
       }
  let newState = state.pets.push(addedState)
  setState(newState)

  
  e.target[0].value = null;
  e.target[1].value = null;
  e.target[2].value = null;
  e.target[3].value = null;
}

console.log("state", state)

let resultStyle = {
  border : "1px solid black",
  padding : "1rem",
  margin : "2rem"
}

  return (
    <div className="App">
      {/* <form className="formDiv" onSubmit={(e)=>dispatch({ payload : e})} > */}
       <form className="formDiv" onSubmit={(e)=>handleSubmit(e)} >
        <div>
          <select name="optionName">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
          <input type="text" placeholder='Pet Name' name="petName" ></input>
        </div>
        <div>
        <input type="text" placeholder='Owner Name' name="ownerName" ></input>
        <input type="text" placeholder='Illiness' name="illness"></input>
        </div>
        <button type="submit">Add Pet</button>
      </form>
      {
      state.length >0 ? 
       state.map((ele,index)=>{
        return(<div key={index} className="resultDiv" style ={resultStyle}>
          <p>{ele.op}</p>
          <p>{ele.petName}</p>
          <p>{ele.ownerName}</p>
          <p>{ele.illiness}</p>
          <p>{new Date().getFullYear() + "/" + new Date().getMonth() + "/" +  new Date().getDay() }</p>
        </div>)
      })
       :<p>No Pets added</p>
       }
    </div>
  );
}

export default App;
