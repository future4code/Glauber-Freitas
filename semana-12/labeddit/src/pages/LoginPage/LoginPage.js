import React from 'react';
import { LogoImage, ScreenContainer, SignUpButtonContainer } from './style';
import logo from "../../assets/logo.jpg"
import { Button } from '@material-ui/core';
import { goToSignUpPage } from '../../routes/coordinator';
import { useHistory } from 'react-router';
import LoginForm from './LoginForm';


const LoginPage = () => {
    const history = useHistory()
    return ( 
        <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm/>
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