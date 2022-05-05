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
        color: '#99a0a7';
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

export const InputGrey = styled(Input)`
    background-color: ${({ error, theme }) => {
        return error ? theme.colors.lightRed : theme.colors.inputGrey;
    }};
    margin-bottom: 25px;
    &::placeholder {
        color: #99a0a7;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        margin-bottom: 15px;
    }
`;

export const TextArea = styled.textarea`
    background-color: ${({ error, theme }) => {
        return error ? theme.colors.lightRed : theme.colors.inputGrey;
    }};
    border-radius: 8px;
    resize: none;
    height: 90px;
    width: 100%;
    transition: all 0.2s ease-out;
    font-family: Nunito;
    margin-bottom: 25px;
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
    &::placeholder {
        color: #99a0a7;
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
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        margin-bottom: 15px;
    }
`;
