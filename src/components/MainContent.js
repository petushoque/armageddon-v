import React, { useEffect, useState } from "react";
import './MainContent.css'

import List from './List';
import withListLoading from './withListLoading';
import AsteroidPopup from './AsteroidPopup'
import SaveWorld from './SaveWorld'

import { today, tomorrowDate } from './Date'

function MainContent() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${tomorrowDate}&api_key=DEMO_KEY`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos.near_earth_objects[`${today}`]});
      });
  }, [setAppState]);

  const [selectedAsteroid, setSelectedAsteroid] = useState(null)

  function handleAsteroidClick (asteroid) {    
    setSelectedAsteroid( {
      id: asteroid.target.attributes.id, 
      name: asteroid.target.attributes.name,
      date: asteroid.target.attributes.date,
      hazardous: asteroid.target.attributes.hazardous,
      distancekm: asteroid.target.attributes.distancekm,
      distancekn: asteroid.target.attributes.distanceln,
      diameter: asteroid.target.attributes.diameter,
      velocity: asteroid.target.attributes.velocity,
      orbiting: asteroid.target.attributes.orbiting,
      magnitude: asteroid.target.attributes.magnitude
     } )
  }

  function closePopup () {
    setSelectedAsteroid(null)
  }

  const [destroyList, setDestroyList] = useState([])

  function addToDestroyList (asteroid) {
    setDestroyList([...destroyList, asteroid])
  }

  return (
    <>
    <div className='main-content main-content_active'>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} onAsteroidClick={handleAsteroidClick}/>
      </div>
    </div>
    <AsteroidPopup asteroid={selectedAsteroid} onClose={closePopup}/>
    <SaveWorld />
    </>
  );
}

export default MainContent
