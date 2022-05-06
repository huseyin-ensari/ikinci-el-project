import React from 'react';
import { GlobalStyle, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import AuthContextProvider from './contexts/authContext';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import ProductsContextProvider from './contexts/productsContext';

const App = () => {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <ProductsContextProvider>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <Router />
                    </ThemeProvider>
                </ProductsContextProvider>
            </AuthContextProvider>
        </BrowserRouter>
    );
};

export default App;
