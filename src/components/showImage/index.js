import React from 'react';
import { CloseButton, Image, Wrapper } from './style';

const baseURL = process.env.REACT_APP_API_BASE_URL;

const ShowImage = ({ image, deleteFile }) => {
    return (
        <Wrapper>
            <Image src={`${baseURL}/${image}`} />
            <CloseButton onClick={deleteFile}>X</CloseButton>
        </Wrapper>
    );
};

export default ShowImage;
