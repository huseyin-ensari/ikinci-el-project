import { URL, api } from './axiosConfigs';

export const fetchBrands = async () => {
    const result = await api.get(URL.brands);
    return result;
};
