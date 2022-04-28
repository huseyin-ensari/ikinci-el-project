import styled from 'styled-components';

export const HorizontalPanelDivider = styled.div`
    display: flex;
`;

export const ImagePanel = styled.div`
    max-height: 100vh;
    overflow: clip;
    width: auto;
    max-width: 50%;
    img {
        width: auto;
        height: 100vh;
    }
    @media (max-width: ${({ theme }) => theme.responsive.laptop}) {
        display: none;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        display: none;
    }
`;

export const FormPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex: 1;
    svg:first-child {
        margin-top: 12%;
        margin-bottom: 50px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.laptop}) {
        svg:first-child {
            margin-top: 5%;
        }
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        svg:first-child {
            width: 140px;
            margin-top: 2%;
            margin-bottom: 20px;
        }
        justify-content: start;
    }
    @media (max-height: 800px) {
        svg:first-child {
            margin-top: 5%;
            margin-bottom: 20px;
        }
        justify-content: start;
    }
`;
