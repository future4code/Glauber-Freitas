import React from 'react';
import { useRequestData } from "../hooks/useRequestData";
import styled from 'styled-components';
import {useHistory, useParams} from "react-router-dom"
import axios from "axios";

const TripCard = styled.div`
    display: flex;
    flex-direction: column;
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


function CardTrips() {
  const history = useHistory()
  const params = useParams()
  console.log("params", params)
    const goToHomePage = () => {
        history.push("/")
    }
    const [trips, isLoadingtrips, errorRequest] = useRequestData(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/glauber-freitas-maryam/trips"
    );
    console.log(trips, "trips")
    return (
        <Trips>
    <h1>Lista de Viagens</h1>
    
      {/* Caso de loading */}
    {isLoadingtrips && <h2>Carregando...</h2>}
      {/* Caso de mensagem de erro */}
    {!isLoadingtrips && errorRequest && <p>{errorRequest.message}</p>}
      {/* Caso de retorno vazio  */}
    {!isLoadingtrips && trips && trips.trips.length === 0 && (
        <p>Não foi encontrado nenhum resultado </p>
    )}
      {/* Caso de sucesso */}
    {!isLoadingtrips && trips &&
        trips.trips.map((trip) => 
        
            <TripCard key={trip.id}>
                <p><strong>Nome:</strong>{trip.name}</p>
                <p><strong>Planeta:</strong>{trip.planet}</p>
                <p><strong>Data:</strong>{trip.date}</p>
                <p><strong>Descrição:</strong>{trip.description}</p>
                <p><strong>Duração em dias:</strong>{trip.durationInDays}</p>
            </TripCard>
        
        )}
    </Trips>
    );
}

export default CardTrips ;