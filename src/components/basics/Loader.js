import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid ${({ theme }) => theme.colors.grey};
    margin-left: auto;
    margin-right: auto;
    width: 20px;
    height: 20px;
    animation: ${spin} 2s linear infinite;
`;
