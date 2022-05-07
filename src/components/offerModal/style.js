import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 460px;
    gap: 20px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

export const ProductCard = styled.div`
    display: flex;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    height: 60px;
    padding: 6px;
    span:last-child {
        margin-left: auto;
        justify-self: flex-end;
        align-self: center;
    }
`;

export const Image = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`;

export const Information = styled.div`
    max-width: 140px;
`;

export const OfferCards = styled.div``;

export const Footer = styled.div`
    position: absolute;
    padding: 10px;
    bottom: 0;
    width: 100%;
`;

export const HideModalButton = styled.div`
    position: absolute;
    padding: 10px;
    top: 0;
    right: 0;
    &:hover {
        cursor: pointer;
        border: 2px solid ${({ theme }) => theme.colors.blue};
        border-radius: 8px;
        padding: 8px;
    }
`;
