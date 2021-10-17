import React from 'react';
import { IconButton} from '@material-ui/core';
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
          <a href="/"><IconButton >Inicial</IconButton></a>
          <h1>LabeX</h1>
          <IconButton>
            <button variant="outlined">Login</button>
          </IconButton>
      </HeaderContainer>
        <Router/>
    </AppContainer>
  );
}

export default App;
