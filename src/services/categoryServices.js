import { URL, api } from './axiosConfigs';

export const fetchCategories = async () => {
    const result = await api.get(URL.categories);
    return result;
};
