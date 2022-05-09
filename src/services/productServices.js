import { URL, api } from './axiosConfigs';
export const fetchProducts = async (skipCount) => {
    const result = await api.get(
        `${URL.products}/?_limit=15&_start=${skipCount}`
    );
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

export const fetchCreateProduct = async (data) => {
    const result = await api.post(`${URL.products}`, data);
    return result;
};

export const fetchDeleteProduct = async (productID) => {
    const result = await api.delete(`${URL.products}/${productID}`);
    return result;
};

export const fetchProductCount = async () => {
    const result = await api.get(`${URL.products}/count`);
    return result;
};
