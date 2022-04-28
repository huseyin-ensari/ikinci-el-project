import React, { useState } from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { generateErrorMessage } from '../../constants/errorMessages';
import { authValidation } from '../../constants/inputValidations';
import { useAuth } from '../../contexts/authContext';
import { fetchLogin } from '../../services/authServices';
import {
    SmallText,
    Text,
    TextLink,
    Title,
    Input,
    WideButton,
    Loader
} from '../basics';
import { Toaster } from '../index';
import { Card, Col, FormElement, Row } from './style';

const LoginForm = () => {
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: authValidation,
        onSubmit: async (values) => {
            try {
                setLoading(true);
                const result = await fetchLogin({
                    identifier: values.email,
                    password: values.password
                });
                login(result);
                setLoading(false);
                navigate('/');
            } catch (err) {
                const errorMessage = generateErrorMessage(err);
                setLoading(false);
                toast.error(errorMessage);
            }
        }
    });

    const handleClick = () => {
        formik.errors.password && toast.error(formik.errors.password);
        formik.errors.email && toast.error(formik.errors.email);
    };

    return (
        <Card>
            <Col>
                <Title>Giriş Yap</Title>
                <Text>Fırsattan yararlanmak için giriş yap!</Text>
            </Col>
            <form onSubmit={formik.handleSubmit}>
                <FormElement>
                    <Text>Email</Text>
                    <Input
                        placeholder='Email@example.com'
                        onChange={formik.handleChange}
                        onBlur={formik.onBlur}
                        value={formik.values.email}
                        name='email'
                        type='email'
                        error={
                            formik.touched.email && formik.errors.email
                                ? true
                                : false
                        }
                    />
                </FormElement>
                <FormElement helper>
                    <Text>Şifre</Text>
                    <Input
                        type='password'
                        name='password'
                        onChange={formik.handleChange}
                        onBlur={formik.onBlur}
                        value={formik.values.password}
                        placeholder='Password'
                        error={
                            formik.touched.password && formik.errors.password
                                ? true
                                : false
                        }
                    />
                    <SmallText>Şifremi Unuttum</SmallText>
                </FormElement>
                <WideButton
                    type='submit'
                    onClick={formik.errors && handleClick}>
                    {loading ? <Loader /> : 'Giriş'}
                </WideButton>
            </form>
            <Row>
                <Text>Hesabın yok mu?</Text>
                <Link to={'/register'}>
                    <TextLink>Üye Ol</TextLink>
                </Link>
            </Row>
            <Toaster />
        </Card>
    );
};

export default LoginForm;
