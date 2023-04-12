import { useState } from 'react';
import getByCharacter from '../petitions/getByCharacter';

const Searchbox = ({setLocation, setIsFindLocation, setResultsRendering}) => {
    const [ searching, setSearching] = useState('')
    const [ results, setResults] = useState([])    

    const changeInput = (e)=> {
        setSearching(e.target.value)
        const getInfoSearching = getByCharacter('name', searching)

        getInfoSearching.then(res => {
            setResults(res.data.results)
        })
    }

    const submitLocations = (e) =>{
        e.preventDefault()
        if(results.length < 2){
            setLocation(results[0])
        } else {
            const resultsFive = []
            for(let i = 0; i < results.length; i++){
                if(i < 5){
                    resultsFive.push(results[i])
                }
            }
            setIsFindLocation(false)
            setResultsRendering(resultsFive)
        }
    }
    
    
    let count = 0 
    return (
        <div className="container_search">
            <div>
                <form onSubmit={submitLocations}>
                    <input type="text" onChange={changeInput} className="search_box"/>
                    <button type="submit" > Search </button>
                    <ul className="filter">
                {
                    results?.map( result => {
                        count += 1
                        if(count < 6){
                            return <li key={result.id} onClick={() => setLocation(result) }>{result.name}</li>
                        }         
                        return <></>       
                    })
                }
                </ul>
                </form>
                
                
                
            </div>
        </div>
    );
};

export default Searchbox;