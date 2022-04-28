import React, { useState, useEffect } from 'react';
import { Toaster as Toast } from 'react-hot-toast';
import { SuccessIcon, WarningIcon } from '../../constants/icons';

const Toaster = () => {
    const [windowWidth, setWindowWidth] = useState();

    useEffect(() => {
        window.addEventListener('resize', setWindowWidth(window.innerWidth));

        return () => {
            window.removeEventListener(
                'resize',
                setWindowWidth(window.innerWidth)
            );
        };
    }, []);

    return (
        <Toast
            toastOptions={{
                success: {
                    style: {
                        background: '#F1FFF0',
                        color: '#46AF32',
                        height: '60px',
                        fontSize: '16px',
                        paddingRight: '30px',
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginTop: windowWidth > 475 ? '50px' : ''
                    },
                    position: windowWidth > 475 ? 'top-right' : 'top-center',
                    icon: <SuccessIcon />
                },
                error: {
                    style: {
                        height: '60px',
                        background: '#FFE5E5',
                        color: '#F77474',
                        fontSize: '16px',
                        paddingRight: '30px',
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginTop: windowWidth > 475 ? '50px' : ''
                    },
                    position: windowWidth > 475 ? 'top-right' : 'top-center',
                    icon: <WarningIcon />
                }
            }}
        />
    );
};

export default Toaster;
