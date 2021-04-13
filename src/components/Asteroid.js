import React from "react";
import './Asteroid.css'

import dino from '../images/dino.svg'
import asteroidImage from '../images/asteroid.svg'

const Asteroid = ({ data } ) => {
    const asteroidName = data.name
    const asteroidHazardous = data.is_potentially_hazardous_asteroid
    const asteroidDate = data.close_approach_data[0].close_approach_date_full
    const asteroidDistanceKm = data.close_approach_data[0].miss_distance.kilometers
    const asteroidDistanceLn = data.close_approach_data[0].miss_distance.lunar
    const asteroidDiameter = data.estimated_diameter.meters.estimated_diameter_min

    const asteroidId = data.id
    
  
    return (
      <div className={asteroidHazardous ? 'asteroid asteroid__hazardous' : 'asteroid asteroid__unhazardous'}>

          <img className='asteroid__dino' src={dino} />
          <img className='asteroid__asteroid' src={asteroidImage} />

        <div className='asteroid__info'>
          <h2 className='asteroid__title'>{asteroidName}</h2>
            <div className='asteroid__digits'>
              <p className='asteroid__paragraph'>Дата</p>
              <p className='asteroid__points'></p>
              <p className='asteroid__paragraph'>{asteroidDate}</p>
            </div>
            <div className='asteroid__digits'>
              <p className='asteroid__paragraph'>Расстояние</p>
              <p className='asteroid__points'></p>
              <p className='asteroid__paragraph asteroid__distance_km'>{Math.floor(asteroidDistanceKm).toLocaleString('ru-RU')} км</p>
              <p className='asteroid__paragraph asteroid__distance_ln'>{Math.floor(asteroidDistanceLn).toLocaleString('ru-RU')} расстояний до луны</p>
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
