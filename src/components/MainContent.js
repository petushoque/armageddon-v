import React, { useEffect, useState } from "react";
import './MainContent.css'

import List from './List';
import withListLoading from './withListLoading';
import AsteroidPopup from './AsteroidPopup'

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
        console.log(repos)
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
      distanceKm: asteroid.target.attributes.distanceKm,
      distanceLn: asteroid.target.attributes.distanceLn,
      diameter: asteroid.target.attributes.diameter,
      velocity: asteroid.target.attributes.velocity,
      orbiting: asteroid.target.attributes.orbiting,
      magnitude: asteroid.target.attributes.magnitude
     } )
  }

  return (
    <>
    <div className='main-content'>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} onAsteroidClick={handleAsteroidClick}/>
      </div>
    </div>
    <AsteroidPopup asteroid={selectedAsteroid}/>
    </>
  );
}

export default MainContent

//<AsteroidPopup asteroid={selectedAsteroid} onClose={closePopup}/>
/*
console.log(asteroid.target.attributes.id)
    console.log(asteroid.target.attributes.name, asteroid.target.attributes.date, asteroid.target.attributes.hazardous,
      asteroid.target.attributes.distanceKm, asteroid.target.attributes.distanceLn, asteroid.target.attributes.diameter,
      asteroid.target.attributes.velocity, asteroid.target.attributes.orbiting, asteroid.target.attributes.magnitude)

*/