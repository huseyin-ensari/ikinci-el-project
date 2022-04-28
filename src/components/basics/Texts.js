import styled from 'styled-components';

export const Text = styled.span`
    font-size: 15px;
    height: 20px;
    color: ${({ theme }) => theme.colors.lightBlack};
`;

export const BoldText = styled(Text)`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blue};
    font-family: 'Nunito';
`;

export const SmallText = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.grey};
`;

export const Title = styled.span`
    font-size: 32px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightBlack};
`;

export const TextLink = styled.a`
    color: ${({ theme }) => theme.colors.blue};
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;
