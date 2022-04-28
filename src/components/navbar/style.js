import styled from 'styled-components';

export const Header = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding-top: 18px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    div:first-child {
        display: flex;
    }
`;

export const ButtonSection = styled.div`
    display: flex;
    margin-left: auto;
    button:first-child {
        margin-right: 10px;
    }
`;
