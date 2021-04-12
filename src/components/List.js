import React from "react";
import './AsteroidsList.css'

import Asteroid from './Asteroid'


const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No Data</p>;
    return (
      <ul className='asteroid-list'>
        {repos.map((repo) => {
          return (
            <li key={repo.id} className=''>
              <Asteroid data={repo}/>              
            </li>
          );
        })}
      </ul>
    );
  };
  export default List;


/*

<p>ID: {repo.id}</p>
              <p>Name: {repo.name} </p>
              <p>Дата максимального сближения: {repo.close_approach_data[0].close_approach_date_full} </p>
              <p>Мнимальное расстояние до земли в км: {repo.close_approach_data[0].miss_distance.kilometers} </p>
              <p>Мнимальное расстояние до земли в расстояних до луны: {repo.close_approach_data[0].miss_distance.lunar} </p>
              <p>Минимальный диаметр в метрах: {repo.estimated_diameter.meters.estimated_diameter_min} </p>
              <p>Опасен? {repo.is_potentially_hazardous_asteroid ? 'yes' : 'no'}</p>
*/