import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ConfirmModal, OfferModal } from '../../components';
import { Container, Text, Title, WideButton } from '../../components/basics';
import {
    WideOutlineButton,
    WideOutlineOrangeButton
} from '../../components/basics/Buttons';
import Modal from '../../components/modal';
import { imgNotFound } from '../../constants/images';
import { useAuth } from '../../contexts/authContext';
import { BasicLayout } from '../../layouts';
import { fetchDeleteOffer } from '../../services/offerServices';
import { fetchProductById } from '../../services/productServices';
import {
    ButtonSection,
    Card,
    Description,
    DetailPanel,
    Details,
    DetailTitles,
    ImagePanel,
    Price
} from './style';

const ProductDetail = () => {
    const { id } = useParams();
    const baseURL = process.env.REACT_APP_API_BASE_URL;
    const [product, setProduct] = useState({});
    const [activeOfferModal, setActiveOfferModal] = useState(false);
    const [isPossibleOffer, setIsPossibleOffer] = useState(true);
    const [bidID, setBidID] = useState();
    const [activeConfirmModal, setActiveConfirmModal] = useState(false);
    const { userID } = useAuth();

    const getProduct = async () => {
        const { data } = await fetchProductById(id);
        setProduct({ ...data });
        for (let i = 0; i < data.offers.length; i++) {
            if (data.offers[i].users_permissions_user == userID) {
                setIsPossibleOffer(false);
                setBidID(data.offers[i].id);
            }
        }
    };

    const buyProduct = async () => {
        setActiveConfirmModal(true);
    };

    const deleteOffer = async () => {
        await fetchDeleteOffer(bidID);
        setIsPossibleOffer(true);
    };

    useEffect(() => {
        getProduct();
    }, [activeOfferModal, activeConfirmModal]);

    return (
        <BasicLayout>
            <Container>
                <Card>
                    <ImagePanel>
                        <img
                            src={baseURL + product?.image?.url}
                            alt={product?.name}
                            onError={(e) => {
                                e.currentTarget.src = imgNotFound;
                            }}
                        />
                    </ImagePanel>
                    <DetailPanel>
                        <Title size={38} isNormal>
                            {product?.name}
                        </Title>
                        <Details>
                            <DetailTitles>
                                <Text isBold>Marka:</Text>
                                <Text isBold>Renk:</Text>
                                <Text isBold>Kullan??m Durumu:</Text>
                            </DetailTitles>
                            <DetailTitles>
                                <Text>{product?.brand}</Text>
                                <Text>{product?.color}</Text>
                                <Text>{product?.status}</Text>
                            </DetailTitles>
                        </Details>
                        <Price>{product?.price} TL</Price>
                        <ButtonSection>
                            {product.isSold ? (
                                <WideOutlineOrangeButton>
                                    Bu ??r??n Sat????ta De??il
                                </WideOutlineOrangeButton>
                            ) : (
                                <>
                                    <WideButton onClick={buyProduct}>
                                        Sat??n Al
                                    </WideButton>
                                    {isPossibleOffer && product.isOfferable && (
                                        <WideOutlineButton
                                            onClick={() =>
                                                setActiveOfferModal(true)
                                            }>
                                            Teklif Ver
                                        </WideOutlineButton>
                                    )}
                                    {!isPossibleOffer && (
                                        <WideOutlineButton
                                            onClick={deleteOffer}>
                                            Teklifi Geri ??ek
                                        </WideOutlineButton>
                                    )}
                                    <Modal
                                        active={activeOfferModal}
                                        hideModal={() =>
                                            setActiveOfferModal(false)
                                        }>
                                        <OfferModal
                                            product={product}
                                            image={
                                                baseURL + product?.image?.url
                                            }
                                            hideModal={() =>
                                                setActiveOfferModal(false)
                                            }
                                        />
                                    </Modal>
                                    <Modal
                                        active={activeConfirmModal}
                                        hideModal={() =>
                                            setActiveConfirmModal(false)
                                        }>
                                        <ConfirmModal
                                            product={product}
                                            hideModal={() =>
                                                setActiveConfirmModal(false)
                                            }
                                        />
                                    </Modal>
                                </>
                            )}
                        </ButtonSection>
                        <Description>
                            <Text size={18} isBold>
                                A????klama
                            </Text>
                            <Text>{product?.description}</Text>
                        </Description>
                    </DetailPanel>
                </Card>
            </Container>
        </BasicLayout>
    );
};

export default ProductDetail;
