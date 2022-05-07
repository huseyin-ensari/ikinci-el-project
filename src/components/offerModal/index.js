import React, { useState } from 'react';
import {
    Footer,
    Header,
    HideModalButton,
    Image,
    Information,
    OfferCards,
    ProductCard,
    Wrapper
} from './style';
import { Text, WideButton } from '../basics';
import { PriceInput } from '../index';
import { CloseButton } from '../../constants/icons';
import { imgNotFound } from '../../constants/images';
import CheckBox from '../checkboxInput';
import { priceValidation } from '../../constants/inputValidations';
import { fetchGiveOffer } from '../../services/offerServices';
import { useAuth } from '../../contexts/authContext';
import toast from 'react-hot-toast';
import Toaster from '../toaster';

const OfferModal = ({ product, image, hideModal }) => {
    const [checked20, setChecked20] = useState(false);
    const [checked30, setChecked30] = useState(false);
    const [checked40, setChecked40] = useState(false);
    const [offerPrice, setOfferPrice] = useState(0);
    const [inputError, setInputError] = useState(false);
    const { userID } = useAuth();

    const handleCheck20 = () => {
        setChecked20(!checked20);
        setChecked30(false);
        setChecked40(false);
        setOfferPrice(calculatePercentage(20));
    };
    const handleCheck30 = () => {
        setChecked30(!checked30);
        setChecked20(false);
        setChecked40(false);
        setOfferPrice(calculatePercentage(30));
    };
    const handleCheck40 = () => {
        setChecked40(!checked40);
        setChecked20(false);
        setChecked30(false);
        setOfferPrice(calculatePercentage(40));
    };

    const calculatePercentage = (percent) => {
        return Math.round((product.price / 100) * percent);
    };

    const handleChangeInput = (e) => {
        setInputError(false);
        setChecked40(false);
        setChecked20(false);
        setChecked30(false);
        setOfferPrice(e.target.value);
    };

    const giveOffer = async () => {
        const isValid = await priceValidation.isValid({ price: offerPrice });
        if (isValid) {
            setInputError(false);
            await fetchGiveOffer(product.id, userID, offerPrice);
            hideModal();
        } else {
            setInputError(true);
            toast.error('Teklif 0 dan büyük ve rakamlardan oluşmalı');
        }
    };

    return (
        <Wrapper>
            <Header>
                <Text size={25} isBold>
                    Teklif Ver
                </Text>
                <HideModalButton onClick={hideModal}>
                    <CloseButton />
                </HideModalButton>
            </Header>
            <ProductCard>
                <Image>
                    <img
                        src={image}
                        alt={product.name}
                        onError={(e) => {
                            e.currentTarget.src = imgNotFound;
                        }}
                    />
                </Image>
                <Information>
                    <Text size={13}>{product.name}</Text>
                </Information>
                <Text size={18} isBold>
                    {product.price} TL
                </Text>
            </ProductCard>
            <OfferCards>
                <CheckBox
                    checked={checked20}
                    onChange={handleCheck20}
                    label={"%20'si kadar Teklif Ver"}
                />
                <CheckBox
                    checked={checked30}
                    onChange={handleCheck30}
                    label={"%30'si kadar Teklif Ver"}
                />
                <CheckBox
                    checked={checked40}
                    onChange={handleCheck40}
                    label={"%40'si kadar Teklif Ver"}
                />
                <PriceInput
                    onChange={handleChangeInput}
                    placeholder={'Teklif Belirle'}
                    error={inputError}
                />
            </OfferCards>
            <Footer>
                <WideButton onClick={giveOffer}>Onayla</WideButton>
            </Footer>
            <Toaster />
        </Wrapper>
    );
};

export default OfferModal;
