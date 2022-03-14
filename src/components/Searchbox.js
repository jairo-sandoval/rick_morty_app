import { useState } from 'react';
import getByCharacter from '../petitions/getByCharacter';
import FindUserInput from './FindUserInput';

const Searchbox = ({setLocation}) => {
    const [ searching, setSearching] = useState('')
    const [ results, setResults] = useState([])    

    const changeInput = (e)=> {
        setSearching(e.target.value)
        const getInfoSearching = getByCharacter('name', searching)

        getInfoSearching.then(res => {
            setResults(res.data.results)
        })

    }

    const changeLocation = (result) => {
        console.log(result)
        setLocation(result) 
    }

    let count = 0 
    return (
        <div className="container_search">
            <div>
                <input type="text" onChange={changeInput} className="search_box"/>
                <button> Search </button>
                <ul className="filter">
                {
                    results?.map( result => {
                        count += 1
                        if(count < 6){
                            return <li key={result.id} onClick={() => changeLocation(result)}>{result.name}</li>
                                
                        }                
                    })
                }
                </ul>
                
            </div>
        </div>
    );
};

export default Searchbox;