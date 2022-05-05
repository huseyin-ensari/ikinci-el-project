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
        cursor: pointer;
        box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.24),
            0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
`;

export const WideOutlineButton = styled(WideButton)`
    background-color: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.blue};
`;

export const WideOutlineOrangeButton = styled(WideOutlineButton)`
    background-color: ${({ theme }) => theme.colors.lightOrange};
    color: ${({ theme }) => theme.colors.orange};
    width: 50%;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        width: 100%;
    }
`;

export const IconButton = styled.button`
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.lightBlue};
    display: flex;
    justify-content: center;
    align-items: baseline;
    border: none;
    outline: none;
    border-radius: 8px;
    width: 130px;
    height: 40px;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: bold;
    svg:first-child {
        margin-right: 5px;
    }
    transition-duration: 0.3s;
    &:hover {
        cursor: pointer;
        box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.24),
            0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
`;

export const ResponsiveIconButton = styled(IconButton)`
    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        padding: 5px;
        span {
            display: none;
        }
        svg:first-child {
            margin-right: 0;
        }
    }
`;

export const Button = styled.button`
    border-radius: 8px;
    max-height: 30px;
    border: none;
    outline: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    padding: 5px 20px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
        cursor: pointer;
        box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.24),
            0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    }
`;

export const RedButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.red};
`;
