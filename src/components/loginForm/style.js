import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 70px 90px;
    box-shadow: 0px 3px 12px '#1E36480A';
    border-radius: 8px;
    width: 53%;
    button {
        margin-top: 10px;
    }
    form {
        width: 100%;
    }
    @media (min-width: ${({ theme }) => theme.responsive.xLargeDesktop}) {
        width: 70%;
    }
    @media (max-width: ${({ theme }) => theme.responsive.largeDesktop}) {
        width: 70%;
    }
    @media (max-width: ${({ theme }) => theme.responsive.desktop}) {
        width: 90%;
    }
    @media (max-width: ${({ theme }) => theme.responsive.laptop}) {
        width: 90%;
        padding-top: 2%;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        width: 90%;
        padding: 3%;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        padding: 10px;
        height: 435px;
    }
`;

export const FormElement = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    span:last-child {
        align-self: flex-end;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
    span:first-child {
        margin-right: 5.5px;
    }
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        margin-bottom: 20px;
    }
`;

export const Gizli = styled.div`
    display: none;
`;
