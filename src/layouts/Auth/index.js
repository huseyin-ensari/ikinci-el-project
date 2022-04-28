import React from 'react';
import PropTypes from 'prop-types';
import { HorizontalPanelDivider, FormPanel, ImagePanel } from './style';
import { authWomen } from '../../constants/images';
import { Logo } from '../../constants/icons';

const AuthLayout = ({ children }) => {
    return (
        <HorizontalPanelDivider>
            <ImagePanel>
                <img src={authWomen} alt='women' />
            </ImagePanel>
            <FormPanel>
                <Logo />
                {children}
            </FormPanel>
        </HorizontalPanelDivider>
    );
};

export default AuthLayout;

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired
};
