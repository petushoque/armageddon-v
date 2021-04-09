import React, { useEffect, useState } from "react";
import './MainContent.css'

import Menu from './Menu'

import List from './List';
import withListLoading from './withListLoading';

function MainContent() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-04-09&end_date=2021-04-10&api_key=DEMO_KEY`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos.near_earth_objects['2021-04-09']});
      });
  }, [setAppState]);
  return (
    <div className='main-content'>
      <Menu />
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
    </div>
  );
}

export default MainContent

// <AsteroidsList /> - вставить после меню  near_earth_objects["2021-04-08"]
//https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-04-08&end_date=2021-04-10&api_key=DEMO_KEY
//https://api.github.com/users/hacktivist123/repos