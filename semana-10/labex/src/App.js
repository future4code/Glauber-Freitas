import './App.css';
import React from 'react';
import { IconButton } from '@material-ui/core';
import HomePage from './pages/HomePage';
import ListTripsPage from './pages/ListTripsPages';
import AdminHomePage from './pages/AdminHomePage';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {useHistory} from "react-router-dom"

function App() {
  const history = useHistory()
  const gotoHomePage = () =>{
    history.push("/")
}
  return (

    <div className="App">
    <header className="App-header">
        <IconButton onClick={gotoHomePage}>Inicial</IconButton>
        <button onClick = {gotoHomePage}>Home</button>
        <h1>LabeX</h1>
        <IconButton>
        <button variant="outlined">Login</button>
        </IconButton>
      </header>
    <BrowserRouter>
      <Switch>
        <Route exact path = {"/"}>
          <HomePage/>
        </Route>
        <Route exact path={"/listTrips"}>
          <ListTripsPage/>
        </Route>
        <Route exact path ={"/adminPage"}>
          <AdminHomePage/>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
      
      
      
      
    
  );
}

export default App;
