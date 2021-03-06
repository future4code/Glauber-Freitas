import React from 'react';
// import './CardGrande.css'
import styled from 'styled-components';

const BigCardContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
`
const ImgBigCard = styled.img`
width: 70px;
margin-right: 10px;
border-radius: 50%;
`

const BigCardH4 = styled.h4`
margin-bottom: 15px;
`

const BigCardDados = styled.div`
display: flex;
flex-direction: column;
justify-items: flex-start;
`


function CardGrande(props) {
    return (
        <BigCardContainer>
            <ImgBigCard src={ props.imagem } />
            <BigCardDados>
                <BigCardH4>{ props.nome }</BigCardH4>
                <p>{ props.descricao }</p>
            </BigCardDados>
        </BigCardContainer>
    )
}

export default CardGrande;