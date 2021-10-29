import React from 'react';
import { LogoImage, ScreenContainer, SignUpButtonContainer } from './style';
import logo from "../../assets/logo.jpg"
import { Button } from '@material-ui/core';
import { goToSignUpPage } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import LoginForm from './LoginForm';
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = ({setLogButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    return ( 
        <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm
                setLogButtonText={setLogButtonText}
            />
            <SignUpButtonContainer>
                <Button
                    onClick={()=> goToSignUpPage(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    );
}

export default LoginPage;