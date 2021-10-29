import React from 'react';
import { Switch, Route} from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";
import PostsListPage from "../pages/PostsListPage/PostsListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AddPostsPage from "../pages/AddPostsPage/AddPostsPage"

const Router = ({setLogButtonText}) => {
    return ( 
        <Switch>
            <Route exact path="/login">
                <LoginPage 
                    setLogButtonText={setLogButtonText}
                />
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage 
                    setLogButtonText={setLogButtonText}
                />
            </Route>
            <Route exact path="/">
                <PostsListPage />
            </Route>
            <Route exact path="/detalhe/:id">
                <PostDetailPage />
            </Route>
            <Route exact path="/adicionar-post">
                <AddPostsPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    );
}

export default Router;
