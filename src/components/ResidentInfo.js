import { useState, useEffect } from 'react';
import axios from 'axios'

const ResidentInfo = ({resident}) => {
    const [ residentInfo, setResidentInfo ] = useState({})

    useEffect(() => {
        axios.get(resident)
            .then(res => {
                setResidentInfo(res.data)
                console.log(res.data)
            })

    }, [])

    const changeStatuslife = () => {
        if(residentInfo.status === 'unknown'){
            return 'gray'
        } else if (residentInfo.status === 'Alive'){
            return 'green'
        } else if (residentInfo.status === 'Dead'){
            return 'red'
        }

    }

    return (
        <div className="card_resident">   
            <div className="alive">
                <div className={`status_life ${changeStatuslife()}`}></div>
                <h3> {residentInfo.status}</h3>

            </div>
            <img src={residentInfo.image} />
            <div className="info_resident">
                
                <h2>{residentInfo.name}</h2>

                <div>
                    <p>gender</p>
                    <h3>{residentInfo.gender}</h3>
                </div>
                

                <p>origin</p>
                <h3>{residentInfo.origin?.name}</h3>

                <p>episodes where appear</p>
                <h3>{residentInfo.episode?.length}</h3>
            </div>

            

        </div>
    );
};

export default ResidentInfo;