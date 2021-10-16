import '../App.css';
import React from 'react';
import { IconButton } from '@material-ui/core';
import HomePage from '../pages/HomePage';
import ListTripsPage from '../pages/ListTripsPages';
import AdminHomePage from '../pages/AdminHomePage';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {useHistory} from "react-router-dom"

export const Router =()=> {
   const history = useHistory()
//   const gotoHomePage = () =>{
//     history.push("/")
// }
  return (

   
     
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
 
  );
}
