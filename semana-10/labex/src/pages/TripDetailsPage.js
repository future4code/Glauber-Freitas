import React from 'react';
import styled from 'styled-components';
import CardTrips from './CardTrips';

const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;
`

const Trip = styled.div`

`
const Travellers = styled.div`

`

const TripDetailsPage = () => {
    return (
        <DetailsContainer>
            <CardTrips/>
            <Travellers>Travellers</Travellers>
        </DetailsContainer>
    )}

export default TripDetailsPage