import './App.css';
import {useState} from 'react';

function App() {
  let relishesArray = [
    {name : "Tomato Chutney" , desc: "desc1"},
    {name : "Green Chutney" , desc: "desc2"},
    {name : "Cocunut Chutney" , desc: "desc3"},
    {name : "Red Chutney" , desc: "desc4"},
    {name : "Black Chutney" , desc: "desc5"},
    {name : "White Chutney" , desc: "desc6"},
  ]

  const [relish, setRelish] = useState(relishesArray);

  const handleNotRightNow = (e)=>{
    let relishName = e.target.parentElement.firstChild.innerHTML;
    let relishes = [...relish]
    let pos = relishes.findIndex(ele=> ele.name === relishName)
    relishes.splice(pos,1)
    setRelish(relishes);
  }


  return (
    <div className ="relishDiv"  style ={{display: 'flex', flexDirection : "row", margin:"1rem"}}>
     {relish.length >0 ? relish.map((ele,index)=>{
      return(<div key={index} style={{border : "1px solid green", height :"10rem", width:"7rem" , padding: "1rem"}}>
        <span >{ele.name}</span>
        <p >{ele.desc}</p>
        <button onClick={(e)=>{handleNotRightNow(e)}}>Not right now</button>
      </div>)
     }): <div>
        <p>No Relishes</p>
        <button onClick={()=>{setRelish(relishesArray)}}>Reset</button> 
        </div>}
    </div>
  );
}

export default App;
