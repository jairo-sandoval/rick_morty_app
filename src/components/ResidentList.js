import React from 'react';
import ResidentInfo from './ResidentInfo'

const ResidentList = ({location}) => {
    console.log(location)
    return (
        <div className="container_residents">
       
        {
            location.residents?.map( resident => (
                <ResidentInfo key={resident} resident={resident}/>
            ))
        }
        </div>
    );
};

export default ResidentList;