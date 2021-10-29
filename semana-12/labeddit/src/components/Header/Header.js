import React from 'react';
import { useHistory } from 'react-router';
import { AppBar, Button } from '@material-ui/core';
import {StyledToolBar} from "./styled"
import {goToPostsListPage, goToLoginPage} from "../../routes/coordinator";

const Header = ({logButtonText, setLogButtonText}) => {
    const token = localStorage.getItem("token")
    const history = useHistory()
    

    const logOut = () => {
        localStorage.removeItem("token")
        
    }

    const logButtonAction = () => {
        if (token){
            logOut()
            setLogButtonText("Login")
            goToLoginPage(history)
        }else {
            goToLoginPage(history)
        }
    }

    return ( 
        <AppBar position="static">
                <StyledToolBar >
                    <Button onClick={()=> goToPostsListPage(history)} color="inherit">LabEddit</Button>
                    <Button onClick={logButtonAction} color="inherit">{logButtonText}</Button>
                </StyledToolBar>
            </AppBar>
    );
}

export default Header;