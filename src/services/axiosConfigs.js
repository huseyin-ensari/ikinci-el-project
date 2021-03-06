import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const accessToken = document.cookie.split('=')[1];

export const api = axios.create({ baseURL });
api.interceptors.request.use(
    async (config) => {
        if (accessToken) {
            config.headers.authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const URL = {
    auth: `${baseURL}/auth`,
    products: '/products',
    users: '/users',
    categories: '/categories',
    offers: '/offers',
    brands: '/brands',
    colors: '/colors',
    statuses: '/using-statuses'
};
