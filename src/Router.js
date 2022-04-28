import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './constants/routerConfig';
import { HomePage, LoginPage, RegisterPage } from './pages';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            {/* public routes */}
            <Route element={<PublicRoute />}>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Route>
            {/* end of public routes */}
            {/* private routes */}
            <Route element={<PrivateRoute />}></Route>
            {/* end of private routes */}
        </Routes>
    );
};

export default Router;
