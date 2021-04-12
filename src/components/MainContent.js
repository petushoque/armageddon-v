import React, { useEffect, useState } from "react";
import './MainContent.css'

import List from './List';
import withListLoading from './withListLoading';

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

  return (
    <div className='main-content'>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos}/>
      </div>
    </div>
  );
}

export default MainContent