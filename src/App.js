import React from 'react';
import { GlobalStyle, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import AuthContextProvider from './contexts/authContext';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

const App = () => {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Router />
                </ThemeProvider>
            </AuthContextProvider>
        </BrowserRouter>
    );
};

export default App;
