import React from 'react';
import { Navigate } from 'react-router-dom';

const ErrorPage = () => {
    return <Navigate replace to='/' />;
};

export default ErrorPage;
