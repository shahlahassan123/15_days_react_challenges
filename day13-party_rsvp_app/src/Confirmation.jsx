// import React, { useImperativeHandle, forwardRef } from 'react';

// const Confirmation = ({ name, category, setName, setCategory, setRspv, setNext }, ref) => {

//   const handleConfirm = () => {
//     setRspv(prev => ([...prev, {
//       name,
//       category
//     }]))
//     setName('')
//     setCategory('')
//     setNext(false)
//   }

//   const handleCancel = (e) => {
//     console.log("text44");
//     e.preventDefault();
//     setName('');
//     setCategory('');
//     setNext(false);
//     console.log("text");
//   }

//   useImperativeHandle(ref, () => ({
//     handleCancel
//   }))

//   return (
//     <div className='confirmation'>
//       <h1>Confirm RSPV Details</h1>
//       <div className="details">
//         <p>Name: {name} </p>
//         <p>Dietary Requirement: {category} </p>
//       </div>
//       <div className="buttons">
//         <button onClick={handleConfirm}>Confirm</button>
//         <button onClick={(e) => handleCancel(e)}>X</button>
//       </div>
//     </div>
//   );
// }

// export default forwardRef(Confirmation);


import React, {useImperativeHandle, forwardRef} from 'react'


const Confirmation = ({name,category, setName,setCategory, setRspv, setNext}, ref) => {

    const handleConfirm =() =>{
      setRspv(prev=>([...prev,{
      name,
      category
    }]))
    setName('')
    setCategory('')
    setNext(false)
    }
 
    const handleCancel=(e)=>{
        console.log("text");
        e.preventDefault()
        setName('')
        setCategory('')
        setNext(false)
        console.log(next)
        console.log("text");
    }

    useImperativeHandle(ref,()=>({
        handleCancel
    }))


  return (
    <div className='confirmation'>
      <h1>Confirm RSPV Details</h1>
      <div className="details">
        <p>Name : {name} </p>
        <p>Dietary Requirement : {category} </p>
      </div>
      <div className="buttons">
        <button onClick={handleConfirm}> Confirm </button>
        <button onClick={e=>handleCancel(e)}> X </button>
      </div>
    </div>
  )
}

export default forwardRef(Confirmation)
