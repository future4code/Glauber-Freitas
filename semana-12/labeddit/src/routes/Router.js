import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";
import PostsListPage from "../pages/PostsListPage/PostsListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import AddPostsPage from "../pages/AddPostsPage/AddPostsPage"
import Header from '../components/Header/Header';

const Router = () => {
    return ( 
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage />
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
        </BrowserRouter>
    );
}

export default Router;
