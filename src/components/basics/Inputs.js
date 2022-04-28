import styled from 'styled-components';

export const Input = styled.input`
    border-radius: 8px;
    background-color: ${({ error, theme }) => {
        return error ? theme.colors.lightRed : theme.colors.lightBlue;
    }};
    width: 100%;
    transition: all 0.2s ease-out;
    border: 1px solid
        ${({ error, theme }) => {
            return error ? theme.colors.red : 'transparent';
        }};
    color: ${({ error, theme }) => {
        return error ? theme.colors.red : theme.colors.black;
    }};
    outline: none;
    padding: 15px;
    font-size: 1.6em;
    margin-top: 3px;
    margin-bottom: 3px;
    &::placeholder {
        color: '#99A0A7';
    }
    &:focus {
        background-color: ${({ error, theme }) => {
            return error ? theme.colors.lightRed : theme.colors.lightBlue;
        }};
        border: 1px solid
            ${({ error, theme }) => {
                return error ? theme.colors.red : theme.colors.blue;
            }};
        padding: 15px;
    }
`;
