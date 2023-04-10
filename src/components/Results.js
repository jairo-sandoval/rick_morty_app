import React from 'react';

const Results = ({results, setIsFindLocation, setLocation }) => {
    console.log(results)
    const changeStateLocation = (infoResult) => {
        setIsFindLocation(true)
        setLocation(infoResult)
    }

    return (
        <div className="container_residents">
            {
                results?.map((result) => (
                    <div className="card_resident" key={result.id}>
                        <h2>{result.name}</h2>
                        <p>Dimension</p>
                        <h3>{result.dimension}</h3>
                        <p>residents</p>
                        <h3>{result.residents.length}</h3>
                        <button onClick={changeStateLocation(result)}>go to location</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Results;