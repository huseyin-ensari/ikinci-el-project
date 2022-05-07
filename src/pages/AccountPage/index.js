import React, { useEffect, useState } from 'react';
import { Container, Text } from '../../components/basics';
import { AccountIcon } from '../../constants/icons';
import { useAuth } from '../../contexts/authContext';
import { BasicLayout } from '../../layouts';
import {
    Divider,
    Email,
    MenuItem,
    PanelMenu,
    Panels,
    PanelSection
} from './style';
import Bids from './Bids';
import Offers from './Offers';
import { fetchMyBids } from '../../services/offerServices';
import { fetchMyProducts } from '../../services/productServices';

const AccountPage = () => {
    const { email, userID } = useAuth();
    const [activeSection, setActiveSection] = useState('offers');
    const [myBids, setMyBids] = useState([]);
    const [myProducts, setMyProducts] = useState([]);

    const handleChangeSection = (sectionName) => {
        setActiveSection(sectionName);
    };

    useEffect(() => {
        const getMyOffers = async () => {
            const { data } = await fetchMyBids(userID);
            setMyBids([...data]);
        };
        const getMyProducts = async () => {
            const { data } = await fetchMyProducts(userID);
            setMyProducts([...data]);
        };
        getMyOffers();
        getMyProducts();
    }, []);

    return (
        <BasicLayout>
            <Container>
                <Email>
                    <AccountIcon />
                    <Text isBold>{email}</Text>
                </Email>
                <Panels>
                    <PanelMenu>
                        <MenuItem
                            active={activeSection === 'offers' ? true : false}
                            onClick={() => handleChangeSection('offers')}>
                            <Text>Teklif Aldıklarım</Text>
                        </MenuItem>
                        <MenuItem
                            active={activeSection === 'bids' ? true : false}
                            onClick={() => handleChangeSection('bids')}>
                            <Text>Teklif Verdiklerim</Text>
                        </MenuItem>
                        <Divider />
                    </PanelMenu>
                    <PanelSection>
                        {activeSection === 'bids' ? (
                            <Bids bids={myBids} />
                        ) : (
                            <Offers products={myProducts} />
                        )}
                    </PanelSection>
                </Panels>
            </Container>
        </BasicLayout>
    );
};

export default AccountPage;
