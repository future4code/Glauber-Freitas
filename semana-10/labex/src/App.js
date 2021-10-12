import './App.css';
import React from 'react';
import { IconButton } from '@material-ui/core';
import HomePage from './pages/HomePage';

import AdbIcon from '@material-ui/icons/Adb';
import ListTripsPage from './pages/ListTripsPages';
import AdminHomePage from './pages/AdminHomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IconButton>Inicial</IconButton>
        <h1>LabeX</h1>
        <IconButton>
        <button variant="outlined">Login</button>
        </IconButton>
      </header>
      <HomePage/>
      <ListTripsPage/>
      <AdminHomePage/>
    </div>
  );
}

export default App;
