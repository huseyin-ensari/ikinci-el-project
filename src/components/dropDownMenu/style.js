import styled from 'styled-components';

export const Main = styled.div`
    margin-top: 5px;
`;

export const DropDownContainer = styled.div`
    width: 100%;
    border-radius: 8px;
`;

export const DropDownHeader = styled.div`
    display: flex;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    color: ${({ error, theme }) => (error ? theme.colors.red : '#99a0a7')};
    background-color: ${({ error, theme }) =>
        error ? theme.colors.lightRed : '#f4f4f4'};
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
    max-height: 228px;
    overflow-y: auto;
    height: auto;
    padding-left: 6px;
    padding-right: 6px;
    background: #ffffff;
    font-size: 16px;
    color: #3e3e3e;
    border-radius: 8px;
    box-shadow: 0px 3px 12px #1e36482e;
    &:first-child {
        padding-top: 0.8em;
    }
    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    scrollbar-width: auto;
    scrollbar-color: #b3b3b3 #f1f0f1;

    /* Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: #8d8686;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #afa1af;
        border-radius: 9px;
        background-clip: padding-box;
        border: 15px solid #a8a3a3;
    }
`;

export const ListItem = styled.li`
    list-style: none;
    padding-left: 10px;
    padding: 8px 10px;
    &:hover {
        cursor: pointer;
        color: #4b9ce2;
        border-radius: 10px;
        background-color: #f2f2f2;
        padding-top: 8px;
        padding-bottom: 8px;
    }
`;
