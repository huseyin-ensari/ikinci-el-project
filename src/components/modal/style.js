import styled from 'styled-components';

export const ModalBlock = styled.div`
    align-items: center;
    bottom: 0;
    justify-content: center;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    opacity: 1;
    z-index: 400;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        align-items: flex-start;
        padding: 10px;
    }
`;

export const ModalOverlay = styled.a`
    opacity: 0.7;
    background-color: ${({ theme }) => theme.colors.blue};
    bottom: 0;
    cursor: default;
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
`;

export const ModalContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    max-height: 75vh;
    max-width: 500px;
    padding: 0 0.8rem;
    width: 100%;
    animation: slide-down 0.2s ease 1;
    z-index: 1;
    box-shadow: 0px 3px 12px #1e36482e;
    border-radius: 10px;
`;

export const ModalBody = styled.div`
    overflow-y: auto;
    padding: 20px;
    position: relative;
`;
