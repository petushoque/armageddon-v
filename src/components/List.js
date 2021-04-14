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
              <Asteroid data={repo} onAsteroidClick={props.onAsteroidClick}/>              
            </li>
          );
        })}
      </ul>
    );
  };
  export default List;