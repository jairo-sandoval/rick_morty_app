import React from 'react';

const LocationInfo = ({location, getRandomLocation}) => {
    return (
        <div 
            className="card_location"
            onClick={getRandomLocation}
        >
            <h2>{location.name}</h2>
            <div className="container_location">
                <div className="info_location">
                    <h3>Type</h3>
                    <p>{location.type}</p>
                </div>
                <div className="info_location">
                    <h3>dimension</h3>
                    <p>{location.dimension}</p>
                </div>
                <div  className="info_location">
                    <h3>residents</h3>
                    <p>{location.residents?.length}</p>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;