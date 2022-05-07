import styled from 'styled-components';

export const HorizontalMenu = styled.div`
    margin-top: 25px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    overflow: auto;
    overflow-x: scroll;
    position: relative;
    scroll-behavior: smooth;
    /* white-space: nowrap; */
    /* for chrome safari*/
    &::-webkit-scrollbar {
        display: none;
    }
    /* for firefox ie */
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    margin-right: 40px;
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
`;

export const Divider = styled.div`
    height: 1px;
    width: calc(100% + 40px);
    background-color: #e0e0e0;
    position: absolute;
    bottom: -1.5px;
    left: 0;
    z-index: -1;
`;
