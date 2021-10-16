import './App.css';
import React from 'react';
import { IconButton } from '@material-ui/core';
import { Router } from './route/Router';


function App() {

  return (

    <div className="App">
      <header className="App-header">
          <a href="/"><IconButton >Inicial</IconButton></a>
          <h1>LabeX</h1>
          <IconButton>
            <button variant="outlined">Login</button>
          </IconButton>
      </header>
      <Router/>
    </div>
  );
}

export default App;
