import { URL, api } from './axiosConfigs';

export const fetchColors = async () => {
    const result = await api.get(URL.colors);
    return result;
};
