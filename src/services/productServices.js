import { URL, api } from './axiosConfigs';

export const fetchProducts = async () => {
    const result = await api.get(`${URL.products}`);
    return result;
};

export const fetchProductById = async (id) => {
    const result = await api.get(`${URL.products}/${id}`);
    return result;
};

export const fetchBuyProduct = async (productID) => {
    const result = await api.put(`${URL.products}/${productID}`, {
        isSold: true
    });
    return result;
};

export const fetchMyProducts = async (userID) => {
    const result = await api.get(
        `${URL.products}?users_permissions_user=${userID}`
    );
    return result;
};
