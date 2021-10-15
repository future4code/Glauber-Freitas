import React from 'react';
import {useHistory} from "react-router-dom"

function HomePage() {
    const history = useHistory()
    const goToListTrips = () => {
        history.push("/listTrips")
    }
    const goToAdminPage = () => {
        history.push("/adminPage")
    }
    return ( 
        <div>
            <button onClick ={goToListTrips}>Lista de Viagens</button>
            <button onClick={goToAdminPage}>Área Administrativa</button>
        </div>
    );
}

export default HomePage;