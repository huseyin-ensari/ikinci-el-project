import axios from 'axios';
import { URL, api } from './axiosConfigs';

export const fetchLogin = async (inputs) => {
    const result = await axios.post(`${URL.auth}/local`, inputs);
    return result;
};

export const fetchRegister = async (inputs) => {
    const result = await axios.post(`${URL.auth}/local/register`, inputs);
    return result;
};

export const fetchMe = async () => {
    const result = await api.get(`${URL.users}/me`);
    return result;
};
