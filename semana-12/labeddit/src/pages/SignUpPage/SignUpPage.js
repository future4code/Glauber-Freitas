import React from 'react';
import { ScreenContainer } from '../LoginPage/style';
import SignUpForm from './SignUpForm';
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const SignUpPage = ({setLogButtonText}) => {
    useUnprotectedPage()
    return ( 
        <ScreenContainer>
            <SignUpForm
                setLogButtonText={setLogButtonText}
            />
        </ScreenContainer>
    );
}

export default SignUpPage