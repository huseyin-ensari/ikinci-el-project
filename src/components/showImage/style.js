import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 113px;
    height: 113px;
    max-width: max-content;
`;

export const Image = styled.img`
    width: 113px;
    height: 113px;
    object-fit: cover;
    padding: 10px;
`;

export const CloseButton = styled.div`
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 12px;
    background-color: #7a7a7a;
    color: white;
    padding: 2px 5px;
    font-weight: bold;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.red};
    }
`;
