import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IsLogged, IsNotLogged } from './constants/routerConfig';
import {
    AccountPage,
    AddProductPage,
    HomePage,
    LoginPage,
    ProductDetail,
    RegisterPage
} from './pages';

const Router = () => {
    return (
        <Routes>
            <Route index path='/' element={<HomePage />} />
            {/* public routes */}
            <Route element={<IsNotLogged />}>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Route>
            {/* end of public routes */}
            {/* private routes */}
            <Route element={<IsLogged />}>
                <Route path='/product/:id' element={<ProductDetail />} />
                <Route path='/account' element={<AccountPage />} />
                <Route path='/add-product' element={<AddProductPage />} />
            </Route>
            {/* end of private routes */}
        </Routes>
    );
};

export default Router;
