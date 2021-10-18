import React from 'react';
import HomePage from '../pages/HomePage';
import ListTripsPage from '../pages/ListTripsPages';
import AdminHomePage from '../pages/AdminHomePage';
import CreateTripPage from '../pages/CreateTripPage';
import LoginPage from '../pages/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage';
import ApplicationFormPage from '../pages/ApplicationFormPage';
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
          <Route exact path ={"/login"}>
            <LoginPage/>
          </Route>
          <Route exact path={"/viagens"}>
            <ListTripsPage/>
          </Route>
          <Route exact path ={"/viagens/criar"}>
            <CreateTripPage/>
          </Route>
          <Route exact path ={"/inscricao"}>
            <ApplicationFormPage/>
          </Route>
          <Route exact path ={"/adminPage"}>
            <AdminHomePage/>
          </Route>
          <Route exact path ={"/viagens/detalhe"}>
            <TripDetailsPage/>
          </Route>
          
          
        </Switch>
      </BrowserRouter>
 
  );
}
