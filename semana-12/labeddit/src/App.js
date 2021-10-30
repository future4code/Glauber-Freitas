import { ThemeProvider } from '@material-ui/styles';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import theme from './constants/theme';
import Router from "./routes/Router"
import MyContext from './contexts/myContext'

const App = () => {
    const [userName, setUserName] = useState('')
    const [bodyPost, setBodyPost] = useState('')

    const token = localStorage.getItem("token")
    const [logButtonText, setLogButtonText] = useState(token ? "Logout": "Login")
    return (
        <ThemeProvider theme={theme} >
            <MyContext.Provider value={{userName, setUserName, bodyPost, setBodyPost}}>
                <BrowserRouter>
                    <Header 
                        logButtonText={logButtonText}
                        setLogButtonText={setLogButtonText}
                    />
                    <Router 
                        setLogButtonText={setLogButtonText}
                    />
                </BrowserRouter>
            </MyContext.Provider>
        </ThemeProvider>
    );
}

export default App;
