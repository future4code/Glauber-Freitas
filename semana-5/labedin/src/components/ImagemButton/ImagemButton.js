import React from 'react';
// import './ImagemButton.css'
import styled from 'styled-components';

const ButtonContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
border-radius: 50px;
width: 200px;
padding: 15px 30px;
margin: 10px auto;
margin-bottom: 0;
`
const ImgButton = styled.img`
width: 30px;
margin-right: 10px;
`


function ImagemButton(props) {
    return (
        <ButtonContainer>
            <ImgButton src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ButtonContainer>

    )
}

export default ImagemButton;