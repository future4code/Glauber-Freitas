import React from 'react';
import { ScreenContainer } from '../LoginPage/style';
import SignUpForm from './SignUpForm';
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { LogoImage } from '../PostsListPage/style';
import logo from "../../assets/logo.jpg"

const SignUpPage = ({setLogButtonText}) => {
    useUnprotectedPage()
    return ( 
        <ScreenContainer>
            <LogoImage src={logo}/>
            <SignUpForm
                setLogButtonText={setLogButtonText}
            />
        </ScreenContainer>
    );
}

export default SignUpPage