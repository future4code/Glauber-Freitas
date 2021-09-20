import React from 'react';
// import './CardPequeno.css'
import styled from "styled-components"

const LittleCardContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 10px 10px;
height: 70px;
`
const Icone = styled.img`
width: 40px;
margin-right: 10px;
`

const Dados = styled.div`
display: flex;
justify-items: flex-end;
`
const ParagrafoDados = styled.p`
padding-left: 10px;
`


const CardPequeno = (props) => {
    return(
        <LittleCardContainer>
            <Icone src={props.imagem}/>
            <Dados>
                <h4>{props.tipo_dado}</h4>
                <ParagrafoDados>{props.dados}</ParagrafoDados>
            </Dados>
        </LittleCardContainer>
    )

}

export default CardPequeno;