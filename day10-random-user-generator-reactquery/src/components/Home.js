import React from 'react'
import useFetchUsers from '../hooks/useFetchUsers'

const Home = () => {


    const onSucess = (data) =>{
        console.log("Fetched Successfully", data)
    }

    const onError = (error) =>{
        console.log("Fetch NOT Successfull", error)
    }

    const {isLoading, data, isError, error, refetch} = useFetchUsers(onSucess, onError)

    if(isLoading){
        return <h1>Loading....</h1>
        }

    if (isError) {
        return <h1>{error}</h1>
    }

    // console.log("Data", data)


    let randomUsers
//   console.log(randomUsers)

    if(data){
        console.log("Data", data.data.results)
        randomUsers = data.data.results
    }


  return (
        <div className='Home' style={{margin: "1rem", padding: "1rem"}}>
            <button onClick={refetch}>Fetch Users</button>
            {randomUsers &&
                <div className='Users' style={{marginTop: "1rem"}}>
                    {randomUsers.map((user, index) => {
                        return (
                           
                            <div className='user' key={index} style={{ border : "1px solid black", margin: "1rem", padding: "1rem"}}>
                                <img src={user.picture.large} alt="user"></img>
                                <p>{user.name.first} {user.name.last}</p>
                                <p>{user.email}</p>
                                <p>{user.cell}</p>
                            </div>
                          

                        )
                    })}
                </div>


            }

        </div>
    )
}

export default Home
