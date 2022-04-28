import React from 'react';
import { RegisterForm } from '../../components';
import AuthLayout from '../../layouts/Auth';

const RegisterPage = () => {
    return (
        <AuthLayout>
            <RegisterForm />
        </AuthLayout>
    );
};

export default RegisterPage;
