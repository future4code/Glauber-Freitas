import React from 'react';
import { useHistory } from 'react-router';
import { AppBar, Button } from '@material-ui/core';
import {StyledToolBar} from "./styled"
import {goToPostsListPage, goToLoginPage} from "../../routes/coordinator";

const Header = () => {
    const history = useHistory()
    return ( 
        <AppBar position="static">
                <StyledToolBar >
                    <Button onClick={()=> goToPostsListPage(history)} color="inherit">LabEddit</Button>
                    <Button onClick={()=> goToLoginPage(history)} color="inherit">Login</Button>
                </StyledToolBar>
            </AppBar>
    );
}

export default Header;