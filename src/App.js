import './App.css';
import LocationInfo from './components/LocationInfo';
import getLocations from './petitions/getLocations';
import { useEffect, useState } from 'react'
import ResidentList from './components/ResidentList';
import Searchbox from './components/Searchbox';

function App() {
  const [ location, setLocation ] = useState({})

    useEffect(() =>{
        const random = Math.floor(Math.random() * 126) + 1
        const locationPromise = getLocations(random)

        locationPromise.then(res => {
            setLocation(res.data)
        })
    }, [])

  return (
    <div className="App">
      <Searchbox setLocation={setLocation}/>
      <LocationInfo location={location} />
      <ResidentList location={location}/>
      
    </div>
  );
}


export default App;
