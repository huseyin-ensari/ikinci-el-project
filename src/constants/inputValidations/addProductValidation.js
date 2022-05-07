import * as yup from 'yup';

let schema = yup.object().shape({
    name: yup
        .string()
        .max(100, 'Ürün adı en fazla 100 karakter olabilir.')
        .required('Email alanı zorunludur.'),
    description: yup
        .string()
        .max(300, 'Açıklama en fazla 300 karakter olabilir.')
        .required('Şifre alanı zorunludur.'),
    price: yup.number().required().positive()
});

export default schema;
