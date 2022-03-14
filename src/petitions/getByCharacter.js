import axios from 'axios'

function getByCharacter( query, value, endPoint = 'location',){
    return axios.get(`https://rickandmortyapi.com/api/${endPoint}/?${query}=${value}`)
        .then(res => res)
}

export default getByCharacter