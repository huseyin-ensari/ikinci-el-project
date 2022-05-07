import React, { useEffect, useState } from 'react';
import {
    ButtonSection,
    Card,
    Row,
    Image,
    Informations,
    OfferPrice
} from './style';
import { imgNotFound } from '../../constants/images';
import { Text, TextLink, Button, RedTextLink } from '../basics';
import { ConfirmModal, Modal } from '../index';
import { fetchOfferByID } from '../../services/offerServices';

const BidCard = ({ bid }) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;
    const [activeModal, setActiveModal] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct({ ...bid.product });
    }, []);

    const updateProduct = async () => {
        const { data } = await fetchOfferByID(bid.id);
        setProduct({ ...data.product });
    };

    useEffect(() => {
        updateProduct();
    }, [activeModal]);

    return (
        <Card>
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
                        <Text isBold>{bid.offerPrice} TL</Text>
                    </OfferPrice>
                </Informations>
                <ButtonSection>
                    {product.isSold === false && bid.isStatus === true && (
                        <Button onClick={() => setActiveModal(true)}>
                            Satın Al
                        </Button>
                    )}
                    {bid.isStatus && <TextLink>Onaylandı</TextLink>}
                    {bid.isStatus === false && (
                        <RedTextLink>Reddedildi</RedTextLink>
                    )}
                </ButtonSection>
            </Row>
            <Modal active={activeModal} hideModal={() => setActiveModal(false)}>
                <ConfirmModal
                    product={product}
                    hideModal={() => setActiveModal(false)}
                />
            </Modal>
        </Card>
    );
};

export default BidCard;
