import * as yup from 'yup';

let schema = yup.object().shape({
    price: yup.number().required().positive()
});

export default schema;
