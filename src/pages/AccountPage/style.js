import styled from 'styled-components';

export const Email = styled.div`
    border-radius: 8px;
    height: 70px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    /* padding-top: 25px; */
    padding-left: 25px;
    margin-bottom: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    svg {
        margin-right: 10px;
    }
`;

export const Panels = styled.div`
    width: 100%;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 20px 30px 161px;
    margin-bottom: 150px;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        padding: 10px;
    }
`;

export const PanelMenu = styled.div`
    display: flex;
    /* background-color: blue; */
    padding-bottom: 6.5px;
    /* border-bottom: 1px solid grey; */
    position: relative;
    margin-bottom: 20px;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        margin-bottom: 10px;
    }
`;

export const MenuItem = styled.div`
    margin-right: 34px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    padding-bottom: 6.5px;
    span:first-child {
        color: ${({ active, theme }) => active && theme.colors.blue};
    }
    &:hover {
        span:first-child {
            color: ${({ theme }) => theme.colors.blue};
            transition: 0.4s;
        }
    }
    cursor: pointer;
    position: relative;
    border-bottom: 2px solid
        ${({ active, theme }) => (active ? theme.colors.blue : 'transparent')};
    z-index: 2;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        span {
            font-size: 15px;
        }
        /* padding-bottom: 8px; */
        margin-right: auto;
        margin-left: auto;
    }
`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: #e0e0e0;
    position: absolute;
    bottom: 6.5px;
    left: 0;
    z-index: 1;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        bottom: 7px;
    }
`;

export const PanelSection = styled.div``;
