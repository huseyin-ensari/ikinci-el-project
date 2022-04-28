import React, { useState } from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
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
import { Card, Col, FormElement, Row } from '../loginForm/style';
import { authValidation } from '../../constants/inputValidations';
import { useAuth } from '../../contexts/authContext';
import { fetchRegister } from '../../services/authServices';
import { generateErrorMessage } from '../../constants/errorMessages';

const RegisterForm = () => {
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: authValidation,
        onSubmit: async (values) => {
            try {
                console.log('value -> ', values);
                setLoading(true);
                const result = await fetchRegister({
                    username: values.email,
                    email: values.email,
                    password: values.password
                });
                login(result);
                setLoading(false);
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
                <Title>Üye Ol</Title>
                <Text>Fırsattan yararlanmak için üye ol!</Text>
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
                    {loading ? <Loader /> : 'Üye Ol'}
                </WideButton>
            </form>
            <Row>
                <Text>Hesabın var mı?</Text> <TextLink>Giriş Yap</TextLink>
            </Row>
            <Toaster />
        </Card>
    );
};

export default RegisterForm;
