import styled from 'styled-components';

export const WideButton = styled.button`
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.blue};
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8em;
    padding: 11px;
    border: none;
    outline: none;
    transition-duration: 0.3s;
    &:hover {
        /* opacity: 0.8; */
        cursor: pointer;
        box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.24),
            0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
`;
