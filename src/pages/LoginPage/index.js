import React from 'react';
import AuthLayout from '../../layouts/Auth';
import { LoginForm } from '../../components';

const LoginPage = () => {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
};

export default LoginPage;
