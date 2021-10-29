import React from 'react';
import { LogoImage, ScreenContainer } from '../LoginPage/style';
import logo2 from "../../assets/Logo2.png"

const PostsListPage = () => {
    return ( 
        <ScreenContainer>
            <LogoImage src={logo2}/>
            <h1>PostsListPage</h1>
        </ScreenContainer>
    );
}

export default PostsListPage;