import React from 'react';
import { Image } from './style';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const ShowImage = ({ image }) => {
    return <Image src={`${baseURL}/${image}`} />;
};

export default ShowImage;
