import { URL, api } from './axiosConfigs';

export const fetchGiveOffer = async (productID, userID, offerPrice) => {
    const result = await api.post(`${URL.offers}`, {
        product: productID,
        users_permissions_user: userID,
        offerPrice: Number(offerPrice)
    });
    return result;
};

export const fetchDeleteOffer = async (offerID) => {
    const result = await api.delete(`${URL.offers}/${offerID}`);
    return result;
};

export const fetchMyBids = async (userID) => {
    const result = await api.get(
        `${URL.offers}?users_permissions_user=${userID}`
    );
    return result;
};

export const fetchOfferByID = async (offerID) => {
    const result = await api.get(`${URL.offers}/${offerID}`);
    return result;
};

export const fetchConfirmOffer = async (offerID) => {
    const result = await api.put(`${URL.offers}/${offerID}`, {
        isStatus: true
    });
    return result;
};

export const fetchRejectOffer = async (offerID) => {
    const result = await api.put(`${URL.offers}/${offerID}`, {
        isStatus: false
    });
    return result;
};
