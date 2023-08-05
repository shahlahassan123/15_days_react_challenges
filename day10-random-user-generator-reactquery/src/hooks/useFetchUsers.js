import { useQuery} from "react-query";
import axios from 'axios'


const fetchRandomUsers = ()=>{
    return axios.get('https://randomuser.me/api/?results=10')
}

const useFetchUsers = (onSucess, onError) => {
  return useQuery('random-users', fetchRandomUsers, {
    onSucess,
    onError,
    enabled: false

  })
}

export default useFetchUsers
