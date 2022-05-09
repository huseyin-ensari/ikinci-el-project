import styled from 'styled-components';

export const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    width: 100%;
    overflow-x: hidden;
    height: auto;
    padding: 16px 15px;
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;
    @media (max-width: ${({ theme }) => theme.responsive.laptop}) {
        /* flex-direction: column; */
    }
    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        flex-direction: column;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        padding: 6px;
    }
`;

export const ImagePanel = styled.div`
    width: 50%;
    max-height: 80vh;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.laptop}) {
        width: 100%;
        height: 70vh;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        height: 60vh;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        height: 40vh;
    }
`;

export const DetailPanel = styled.div`
    flex: 1;
    padding-left: 60px;
    display: flex;
    flex-direction: column;
    @media (max-width: ${({ theme }) => theme.responsive.laptop}) {
        width: 50%;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        padding-left: 0;
        width: 100%;
        margin-top: 20px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        padding-left: 0;
        margin-top: 0;
        span:first-child {
            font-size: 18px;
        }
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        margin-top: 0;
        order: 3;
    }
`;

export const DetailTitles = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    }
`;

export const DetailTexts = styled(DetailTitles);

export const ButtonSection = styled.div`
    display: flex;
    width: 480px;
    gap: 10px;
    margin-bottom: 30px;
    @media (max-width: ${({ theme }) => theme.responsive.laptop}) {
        width: 70%;
        button {
            width: 100%;
        }
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        order: 4;
        margin: 0;
        top: 602px;
        left: 0px;
        background-color: ${({ theme }) => theme.colors.white};
        position: absolute;
        padding: 10px;
        width: 100vw;
        box-shadow: 0px -3px 8px #1e364814;
        button {
            margin-left: auto;
            margin-right: auto;
            &:first-child {
            }
        }
    }
`;

export const Price = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
    margin-top: 30px;
    margin-bottom: 30px;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        order: 2;
        margin: 0;
    }
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 480px;
    span:first-child {
        margin-bottom: 10px;
    }
    /* margin-top: 10px; */
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        order: 5;
    }
`;
