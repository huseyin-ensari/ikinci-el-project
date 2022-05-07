import {
    ButtonSection,
    Card,
    Row,
    Image,
    Informations,
    OfferPrice
} from './style';
import { imgNotFound } from '../../constants/images';
import { Button, RedButton, RedTextLink, Text, TextLink } from '../basics';
import {
    fetchConfirmOffer,
    fetchRejectOffer
} from '../../services/offerServices';
import { useEffect, useState } from 'react';
import { fetchMyProducts } from '../../services/productServices';
import { useAuth } from '../../contexts/authContext';

const OfferCard = ({ product, offers }) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;
    const [scopeOffers, setScopeOffers] = useState([]);
    const { userID } = useAuth();

    const handleRejectOffer = async (offerID) => {
        await fetchRejectOffer(offerID);
        updateOffers();
    };

    const handleConfirmOffer = async (offerID) => {
        await fetchConfirmOffer(offerID);
        updateOffers();
    };

    useEffect(() => {
        setScopeOffers([...offers]);
        updateOffers();
    }, []);

    const updateOffers = async () => {
        const { data } = await fetchMyProducts(userID);
        let finded = data.find(
            (findedProduct) => findedProduct.id === product.id
        );
        setScopeOffers([...finded.offers]);
    };

    return (
        <>
            {scopeOffers.reverse().map((offer) => (
                <Card key={offer.id}>
                    <Image>
                        <img
                            src={baseURL + product?.image?.url}
                            alt={product.name}
                            onError={(e) => {
                                e.currentTarget.src = imgNotFound;
                            }}
                        />
                    </Image>
                    <Row>
                        <Informations>
                            <Text size={18}>{product.name}</Text>
                            <OfferPrice>
                                <Text>Alınan Teklif: </Text>
                                <Text isBold>{offer.offerPrice} TL</Text>
                            </OfferPrice>
                        </Informations>
                        <ButtonSection>
                            {offer.isStatus === null && (
                                <>
                                    <Button
                                        onClick={() =>
                                            handleConfirmOffer(offer.id)
                                        }>
                                        Onayla
                                    </Button>
                                    <RedButton
                                        onClick={() =>
                                            handleRejectOffer(offer.id)
                                        }>
                                        Reddet
                                    </RedButton>
                                </>
                            )}
                            {offer.isStatus && <TextLink>Onaylandı</TextLink>}
                            {offer.isStatus === false && (
                                <RedTextLink>Reddedildi</RedTextLink>
                            )}
                        </ButtonSection>
                    </Row>
                </Card>
            ))}
        </>
    );
};

export default OfferCard;
