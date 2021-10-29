import React from 'react';
import { ErrorImage, ErrorPageContainer } from './style';
import erro from "../../assets/erro.png"
import { Typography } from '@material-ui/core';

const ErrorPage = () => {
    return ( 
        <ErrorPageContainer>
            <ErrorImage src={erro}/>
            <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
        </ErrorPageContainer>
    );
}

export default ErrorPage;