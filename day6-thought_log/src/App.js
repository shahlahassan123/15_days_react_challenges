
import './App.css';
import {useState} from 'react';

function App() {
 const [thoughtStates, setThoughtStates] = useState([]);



 const addThought=(e)=>{
  let thought = e.target.parentElement.firstChild.value;
  setThoughtStates([...thoughtStates , thought]);
  e.target.parentElement.firstChild.value = ""
 }

 const deleteThought=(index)=>{
  let thoughtsArray = [...thoughtStates]
  thoughtsArray.splice(index, 1);
  setThoughtStates(thoughtsArray);
 }

 const timeformat = ()=>{
  let t = new Date().getHours() + ":" + new Date().getMinutes()
  return t
 }

  return (
    <>
    <div className="App" style ={{display: 'flex', flexDirection : "row", margin:"1rem"}}>
      <input style={{border : "1px solid green",  width:"35rem" , padding: "1rem", margin : "1rem"}}></input>
      <button style={{ margin : "1rem"}} onClick = {(e)=>{addThought(e)}}>Add thought</button>
    </div>
    {thoughtStates.length >0 && thoughtStates.map((ele,index)=>
    { 
      return (<div key={index} style ={{display: 'flex', flexDirection : "row", margin:"1rem"}}>
      <p  style={{ margin : "2rem"}}>{ele}{' '} {(timeformat())}</p>
      
      <button style={{ margin : "1rem"}} onClick = {()=>{deleteThought(index)}}>Delete thought</button></div>)})}
    </>
  );
}

export default App;
