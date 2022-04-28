import styled from 'styled-components';

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 78%;
    /* padding: 0 12%; */
    @media (max-width: ${({ theme }) => theme.responsive.largeDesktop}) {
        width: 90%;
    }
    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        width: 95%;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        width: 100%;
        padding-right: 10px;
        padding-left: 10px;
    }
`;
