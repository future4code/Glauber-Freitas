import React from 'react';
import './CardPequeno.css'

const CardPequeno = (props) => {
    return(
        <div className="littlecard-container">
            <img src={props.imagem}/>
            <div>
                <h4>{props.tipo_dado}</h4>
                <p>{props.dados}</p>
            </div>
        </div>
    )

}

export default CardPequeno;