import { URL, api } from './axiosConfigs';

export const fetchStatuses = async () => {
    const result = await api.get(`${URL.statuses}`);
    return result;
};
