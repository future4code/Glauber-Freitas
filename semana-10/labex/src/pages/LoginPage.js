import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { TextField , Button} from '@material-ui/core';

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;

`

const LoginPage = () => {
    return <div>
        <Typography variant = "h2">Login</Typography> 
        <LoginForm>
            <TextField label={"E-mail"} type={"email"}/>
            <TextField label={"Senha"} type={"password"}/>
            <Button type={"submit"}>Entrar</Button>
        </LoginForm>
    </div>
}

export default LoginPage