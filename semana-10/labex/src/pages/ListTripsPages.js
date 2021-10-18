import React from 'react';
import { useRequestData } from "../hooks/useRequestData";
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {useHistory} from "react-router-dom";

const TripCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin-top: 10px;
    width: 500px;
    border-radius: 10px;
`
const Trips = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`


function ListTripsPage() {
  const history = useHistory()
  const goToCreateTripPage = () => {
    history.push("/viagens/criar")
}

    const [trips, isLoadingtrips, errorRequest] = useRequestData(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/glauber-freitas-maryam/trips"
    );
    console.log(trips, "trips")
    return (
        <Trips>
          <h2>Viagens</h2>
          <Button variant={'contained'} onClick={goToCreateTripPage}>Criar Viagem</Button>
          {isLoadingtrips && <h2>Carregando...</h2>}
          {!isLoadingtrips && errorRequest && <p>{errorRequest.message}</p>}
          {!isLoadingtrips && trips && trips.trips.length === 0 && (
          <p>Não foi encontrado nenhum resultado </p>
           )}
          {!isLoadingtrips && trips &&
            trips.trips.map((trip) => 
            <a href={"/viagens/detalhe"}><TripCard key={trip.id}>
              <h3>{trip.name}</h3>
            </TripCard>
            </a>
            )}
        </Trips>
    );
}

export default ListTripsPage ;
