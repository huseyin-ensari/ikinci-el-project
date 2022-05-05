import React from 'react';
import { Navbar } from '../../components';

const BasicLayout = ({ children }) => {
    return (
        <>
            <Navbar /> {children}
        </>
    );
};

export default BasicLayout;
