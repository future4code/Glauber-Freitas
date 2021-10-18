import React from 'react';
import { Button } from '@material-ui/core';
import { Router } from './route/Router';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  justify-content: space-between;
  background-color: #C4C4C4;
`
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


function App() {

  return (

    <AppContainer>
      <HeaderContainer>
          <a href="/"><Button variant={"outlined"} >Inicio</Button></a>
          <h1>LabeX</h1>
          <a href={"/login"}><Button variant={"outlined"}>Login</Button></a>
          
      </HeaderContainer>
        <Router/>
    </AppContainer>
  );
}

export default App;
