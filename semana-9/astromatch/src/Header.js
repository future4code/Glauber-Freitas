import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum'
import "./Header.css"
import { IconButton } from '@material-ui/core';

function Header() {
    return ( 
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large"/>
            </IconButton>
            <h2>Logo</h2>
            <IconButton>
                <ForumIcon fontSize="large"/>
            </IconButton>
        </div>
     );
}

export default Header;