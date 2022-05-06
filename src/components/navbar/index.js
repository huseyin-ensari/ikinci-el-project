import React from 'react';
import { Logo, PersonIcon, PlusIcon } from '../../constants/icons';
import { BoldText, Container, IconButton } from '../basics';
import { ButtonSection, Header } from './style';
import { useAuth } from '../../contexts/authContext';
import { Link } from 'react-router-dom';
import { ResponsiveIconButton } from '../basics/Buttons';

const Navbar = () => {
    const { isLogged } = useAuth();

    return (
        <Header>
            <Container>
                <Link to={'/'}>
                    <Logo height={42} width={128} />
                </Link>
                <ButtonSection>
                    {isLogged && (
                        <Link to={'/add-product'}>
                            <ResponsiveIconButton>
                                <PlusIcon />
                                <BoldText>Ürün Ekle</BoldText>
                            </ResponsiveIconButton>
                        </Link>
                    )}
                    {isLogged ? (
                        <Link to={'/account'}>
                            <IconButton>
                                <PersonIcon />
                                <BoldText>Hesabım</BoldText>
                            </IconButton>
                        </Link>
                    ) : (
                        <Link to={'/login'}>
                            <IconButton>
                                <PersonIcon />
                                <BoldText>Giriş Yap</BoldText>
                            </IconButton>
                        </Link>
                    )}
                </ButtonSection>
            </Container>
        </Header>
    );
};

export default Navbar;
