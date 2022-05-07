import styled from 'styled-components';

export const ToggleContainer = styled.div`
    display: flex;
`;

export const CheckBoxWrapper = styled.div`
    position: relative;
    margin-left: 30px;
`;

export const CheckBoxLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    height: 24px;
    border-radius: 12px;
    background: #bebebe;
    cursor: pointer;
    &::after {
        content: '';
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 3px;
        background: #ffffff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.2s;
    }
`;

export const CheckBox = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 12px;
    width: 44px;
    height: 24px;
    &:checked + ${CheckBoxLabel} {
        background: ${({ theme }) => theme.colors.blue};
        &::after {
            content: '';
            display: block;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            margin-left: 21px;
            transition: 0.2s;
        }
    }
`;
