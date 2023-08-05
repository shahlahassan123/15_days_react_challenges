import React from 'react'

const Home = () => {

    const handleSubmit =() =>{

    }




  return (
    <div className='home'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter Name'></input>
            <select placeholder='Select a category'>
            <option value=''>Select a category</option>
                <option value='I can eat anything'>I can eat anything</option>
                <option value='Vegan'>Vegan</option>
                <option value='Vegan'>Vegtarian</option>
                <option value='Vegan'>Non-vegtarian</option>
            </select>
            <div className="buttons">
                <button id="submit" type="submit">Next</button><br></br>     
            </div>
        </form>
      
    </div>
  )
}

export default Home
