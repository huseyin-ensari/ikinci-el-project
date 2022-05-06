import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 13px 10px 12px 10px;
    justify-content: start;
    align-items: center;
    margin-bottom: 15px;
    background-color: ${({ checked, theme }) =>
        checked ? theme.colors.lightBlue : theme.colors.white};
`;

export const Icon = styled.div`
    margin-right: 5px;
`;

export const Label = styled.div`
    font-size: 15px;
    color: ${({ checked, theme }) =>
        checked ? theme.colors.blue : theme.colors.darkBlack};
`;
