import styled from 'styled-components';

export const Card = styled.div`
    width: 100%;
    height: 104px;
    border-radius: 8px;
    border: 1px solid #f2f2f2;
    display: flex;
    padding: 10px;
    margin-bottom: 20px;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        margin-bottom: 10px;
        height: 134px;
    }
`;

export const Image = styled.div`
    width: 78px;
    height: 84px;
    margin-right: 10px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`;

export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4px;
`;

export const OfferPrice = styled.div`
    width: 230px;
    height: 36px;
    background-color: #f2f2f2;
    border-radius: 8px;
    margin-top: 7px;
    padding: 8px 10px;
    span:first-child {
        color: #b1b1b1;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        margin-bottom: 10px;
        margin-top: 10px;
        width: 100%;
    }
`;

export const ButtonSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-left: auto;
    margin-right: 30px;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        margin-left: 0;
        margin-right: 0;
        width: 100%;
        justify-content: start;
        button {
            width: 50%;
        }
    }
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        flex-direction: column;
    }
`;
