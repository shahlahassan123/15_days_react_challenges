import React from 'react';
import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Confirmation from './Confirmation';
import Home from './Home';
import List from './List';

const App = () => {
  const confirmationRef = useRef();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [next, setNext] = useState(false);
  const [rspv, setRspv] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //  if(name){
    //    console.log("sub")
      setNext(true);
    //  }
   
  };



  if (next) {
    return (
      <Confirmation
        name={name}
        category={category}
        setName={setName}
        setCategory={setCategory}
        setRspv={setRspv}
        setNext={setNext}
        ref={confirmationRef}
      />
    );
  }

  const handleImperativeCancel = () => {
    console.log("Logg")
    confirmationRef?.current?.handleCancel();
    console.log("Logg 44")
    console.log(next)
    console.log(name)
  };

  return (
    <div className="app">
      <div className='home'>
        <h1>Party RSPV</h1>
        <form onSubmit={handleSubmit}>
       
          <input type='text' placeholder='Enter Name' value={name} onChange={e => setName(e.target.value)}></input>
          <select onChange={e => setCategory(e.target.value)} value={category}>
            <option value=''>Select a category</option>
            <option value='I can eat anything'>I can eat anything</option>
            <option value='Vegan'>Vegan</option>
            <option value='Vegtarian'>Vegtarian</option>
            <option value='Non-vegtarian'>Non-vegtarian</option>
          </select>
          <div className="buttons">
            <button id="submit" type="submit">Next</button><br></br>
            <button id="cancel"  onClick={handleImperativeCancel}>X</button>
          </div>
        </form>
        <List rspv={rspv} />
      </div>
    </div>
  );
}

export default App;


// import React from 'react'
// import { useState , useRef} from 'react'
// import { BrowserRouter as Router, Routes, Route , useNavigate} from 'react-router-dom'
// import Confirmation from './Confirmation'
// import Home from './Home'
// import List from './List'

// const App = () => {


// const confirmationRef = useRef()
// const [name,setName] = useState('')
// const [category,setCategory] = useState('')
// const [next,setNext] = useState(false)

// const [rspv, setRspv] = useState([])

//   const handleSubmit =(e) =>{
//     e.preventDefault()

//     setNext(true)

   
//   }

//   console.log("RSPV 2", rspv)


//   if(next){
//     return <Confirmation name={name} category={category} setName={setName}
//      setCategory={setCategory} setRspv={setRspv}  setNext={setNext} 
//      ref={confirmationRef}/>
//   }


// const handleImperativeCancel = () =>{
//   confirmationRef?.current?.handleCancel()
// }

//   return (
//     <div className="app">
//     <div className='home'>
//       <h1>Party RSPV</h1>
//         <form onSubmit={handleSubmit} onCancel={handleImperativeCancel}>
//             <input type='text' placeholder='Enter Name' value={name} onChange={e=>setName(e.target.value)}></input>
//             <select onChange={e=>setCategory(e.target.value)} value={category}>
//             <option value=''>Select a category</option>
//                 <option value='I can eat anything'>I can eat anything</option>
//                 <option value='Vegan'>Vegan</option>
//                 <option value='Vegtarian'>Vegtarian</option>
//                 <option value='Non-vegtarian'>Non-vegtarian</option>
//             </select>
//             <div className="buttons">
//                 <button id="submit" type="submit">Next</button><br></br> 
                 

//                 {/* <button id="submit" onClick={handleImperativeCancel}>X</button><br></br>  */}
//                 {/* <button onClick={handleImperativeCancel}> X </button>     */}
//                   <button onClick={handleImperativeCancel}> X </button>   
//             </div>
//         </form>
//         <List rspv={rspv} />

      
//     </div>
//   </div>




  
//   )
// }

// export default App


  