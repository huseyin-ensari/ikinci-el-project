import * as yup from 'yup';

let schema = yup.object().shape({
    email: yup
        .string()
        .email('Lütfen geçerli bir email girin.')
        .required('Email alanı zorunludur.'),
    password: yup
        .string()
        .min(8, 'Şifre en az 8 karakter olabilir.')
        .max(20, 'Şifre en fazla 20 karakter olabilir.')
        .required('Şifre alanı zorunludur.')
});

export default schema;
