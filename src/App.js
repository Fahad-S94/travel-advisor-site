import './App.css';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';

import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';

import { getPlacesData } from './api';
import { useEffect, useState } from 'react';


function App() {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    getPlacesData()
    .then((data) => {
      console.log(data)
      setPlaces(data)
    })
  }, [])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
