import './App.css';
import LocationInfo from './components/LocationInfo';
import getLocations from './petitions/getLocations';
import { useEffect, useState } from 'react'
import ResidentList from './components/ResidentList';
import Searchbox from './components/Searchbox';
import Results from './components/Results';

function App() {
  const [ location, setLocation ] = useState({})
  const [ isFindLocation, setIsFindLocation ] = useState(true) 
  const [ resultsRendering, setResultsRendering ] = useState([]) 

  const getRandomLocation = () => {
    const random = Math.floor(Math.random() * 126) + 1
    const locationPromise = getLocations(random)

    locationPromise.then(res => {
        setLocation(res.data)
    })
  }

  useEffect(() =>{
    getRandomLocation()
  }, [])

  return (
    <div className="App">
      <Searchbox setLocation={setLocation} setIsFindLocation={setIsFindLocation} setResultsRendering={setResultsRendering} />
      <LocationInfo location={location} getRandomLocation={getRandomLocation} />
      { isFindLocation ? <ResidentList location={location}/> : <Results results={resultsRendering} setIsFindLocation={setIsFindLocation} setLocation={setLocation} /> }
      
    </div>
  );
}


export default App;
