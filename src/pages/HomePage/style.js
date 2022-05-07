import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Image = styled.img`
    width: 100%;
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-bottom: 161px;
    @media (max-width: ${({ theme }) => theme.responsive.largeDesktop}) {
        grid-template-columns: repeat(4, 1fr);
        gap: 9px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.laptop}) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 9px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 9px;
    }
`;

export const ProductCard = styled.div`
    padding: 10px;
    width: 280px;
    height: 392px;
    background-color: #fff;
    position: relative;
    border-radius: 8px;
    img {
        margin-top: 0;
        width: 260px;
        height: 297px;
        object-fit: cover;
    }
    &:hover {
        box-shadow: 5px 10px 18px #888888;
        cursor: pointer;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        width: 300px;
        height: 400px;
        padding: 6px;
        img {
            width: 280px;
            height: 300px;
        }
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        width: 164px;
        height: 266px;
        padding: 6px;
        img {
            width: 149px;
            height: 184px;
        }
    }
`;

const emptyTextAnimation = keyframes`
    0% {
        letter-spacing: 1em;
        -webkit-transform: translateZ(400px);
        transform: translateZ(400px);
        opacity: 0;
    }
    40% {
        opacity: 0.6;
    }
    100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    opacity: 1;
    }
`;

export const Empty = styled.div`
    font-size: 20px;
    text-align: center;
    height: 400px;
    animation: ${emptyTextAnimation} 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
`;

export const ProductInformation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Price = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
    position: absolute;
    bottom: 10px;
`;
