import React from 'react';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';
import { Button} from '@material-ui/core'


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  justify-content: center;
`

const Buttons = styled.div`
display: flex;
width: 80vw
justify-content: space;
`

function HomePage() {
    const history = useHistory()
    const goToListTrips = () => {
        history.push("/viagens")
    }
    const goToAdminPage = () => {
        history.push("/login")
    }
    const goToApplicationFormPage = () => {
        history.push("/inscricao")
    }
    return ( 
        <HomeContainer>
            <h2>Principal</h2> 
            <Buttons>

                <Button variant={'outlined'} color={'inherit'} onClick ={goToApplicationFormPage}>Inscrição</Button>
                {/* <Button variant={'outlined'} color={'primary'} onClick ={goToListTrips}>Lista de Viagens</Button> */}
                {/* <Button variant={'outlined'} color={'primary'} onClick={goToAdminPage}>Área Administrativa</Button> */}
            </Buttons>
        </HomeContainer>
    );
}

export default HomePage;