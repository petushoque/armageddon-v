import React from "react";
import './Asteroid.css'

import dino from '../images/dino.svg'
import asteroidImage from '../images/asteroid.svg'

const Asteroid = (props ) => {
    const asteroidName = props.data.name
    const asteroidHazardous = props.data.is_potentially_hazardous_asteroid
    const asteroidDate = props.data.close_approach_data[0].close_approach_date_full
    const asteroidDistanceKm = props.data.close_approach_data[0].miss_distance.kilometers
    const asteroidDistanceLn = props.data.close_approach_data[0].miss_distance.lunar
    const asteroidDiameter = props.data.estimated_diameter.meters.estimated_diameter_min

    const asteroidId = props.data.id
    const asteroidVelocity = props.data.close_approach_data[0].relative_velocity.kilometers_per_second;
    const asteroidOrbiting = props.data.close_approach_data[0].orbiting_body
    const asteroidMagnitude = props.data.absolute_magnitude_h

    function setAsteroid (asteroid) {props.onAsteroidClick(asteroid) }
    
  
    return (
      <div className={asteroidHazardous ? 'asteroid asteroid__hazardous' : 'asteroid asteroid__unhazardous'}>

          <img className='asteroid__dino' src={dino} />
          <img className='asteroid__asteroid' src={asteroidImage} />

        <div className='asteroid__info'>
          <h2 onClick={setAsteroid} className='asteroid__title' 
                  id={asteroidId} 
                  name={asteroidName}
                  date={asteroidDate}
                  hazardous={asteroidHazardous.toString()}
                  distancekm={asteroidDistanceKm}
                  distanceln={asteroidDistanceLn}
                  diameter={asteroidDiameter}
                  velocity={asteroidVelocity}
                  orbiting={asteroidOrbiting}
                  magnitude={asteroidMagnitude}>{asteroidName}</h2>
            <div className='asteroid__digits'>
              <p className='asteroid__paragraph'>Дата</p>
              <p className='asteroid__points'></p>
              <p className='asteroid__paragraph'>{asteroidDate}</p>
            </div>
            <div className='asteroid__digits'>
              <p className='asteroid__paragraph'>Расстояние</p>
              <p className='asteroid__points'></p>
              <p className='asteroid__paragraph asteroid__distance_km'>{Math.floor(asteroidDistanceKm).toLocaleString('ru-RU')} км</p>
              <p className='asteroid__paragraph asteroid__distance_ln asteroid__distance_hyde'>{Math.floor(asteroidDistanceLn).toLocaleString('ru-RU')} расстояний до луны</p>
            </div>
            <div className='asteroid__digits'>
              <p className='asteroid__paragraph'>Размер</p>
              <p className='asteroid__points'></p>
              <p className='asteroid__paragraph'>{Math.floor(asteroidDiameter).toLocaleString('ru-RU')} м</p>
            </div>
        </div>
        <div className='asteroid__save-world'>
            <p className='asteroid__paragraph'>Оценка:</p>
            <p className='asteroid__paragraph'>{asteroidHazardous ? 'опасен' : 'не опасен'}</p>
            <button className="asteroid__button">На уничтожение</button>
        </div>
      </div>
    )
  };

export default Asteroid;


//const Asteroid = ({ data }, {onAsteroidClick} ) => {