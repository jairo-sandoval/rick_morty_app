import axios from 'axios'

function getLocations(id){
    return axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => res)
}

export default getLocations