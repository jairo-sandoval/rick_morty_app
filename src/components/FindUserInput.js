import { useState} from 'react';

const FindUserInput = ({result}) => {
    const [ findResult, setFingResult] = useState({})

    const changeLocation = (resultInfo) => {
        const suma = 1+1
        setFingResult(resultInfo)
        console.log(resultInfo)
    }

    return <li onClick={() => changeLocation(result)}>{result.name}</li>;
};

export default FindUserInput;