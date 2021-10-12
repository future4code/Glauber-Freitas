import React from 'react';
import { useRequestData } from "../hooks/useRequestData";


function ListTripsPage() {
    const [trips, isLoadingtrips, errorRequest] = useRequestData(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips"
    );
    console.log(trips, "trips")
    return (
        <div>
      <h1>Lista de Viagens</h1>
      {/* Caso de loading */}
      {isLoadingtrips && <h2>Carregando...</h2>}
      {/* Caso de mensagem de erro */}
      {!isLoadingtrips && errorRequest && <p>{errorRequest.message}</p>}
      {/* Caso de retorno vazio  */}
      {!isLoadingtrips && trips && trips.length === 0 && (
        <p>Não foi encontrado nenhum resultado </p>
      )}
      {/* Caso de sucesso */}
      {!isLoadingtrips && trips &&
        trips.trips.map((trip) => <li key={trip.id}>{trip.name}</li>)}
    </div>
    );
}

export default ListTripsPage ;
