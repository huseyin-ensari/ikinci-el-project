import React from 'react';
import toast from 'react-hot-toast';
import { fetchBuyProduct } from '../../services/productServices';
import { Text, WideButton, WideOutlineButton } from '../basics';
import Toaster from '../toaster';
import { Wrapper, ButtonSection } from './style';

const ConfirmModal = ({ product, hideModal }) => {
    const buyProduct = async () => {
        await fetchBuyProduct(product.id);
        toast.success('Satın Aldındı');
        setTimeout(() => hideModal(), 700);
    };

    return (
        <Wrapper>
            <Text isBold size={25}>
                Satın Al
            </Text>
            <Text>Satın Almak istiyor musunuz ?</Text>
            <ButtonSection>
                <WideOutlineButton onClick={hideModal}>
                    Vazgeç
                </WideOutlineButton>
                <WideButton onClick={buyProduct}>Satın Al</WideButton>
            </ButtonSection>
            <Toaster />
        </Wrapper>
    );
};

export default ConfirmModal;
