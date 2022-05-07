import styled from 'styled-components';

export const Card = styled.div`
    border-radius: 8px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 30px;
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    button {
        align-self: flex-end;
        max-width: 20%;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        padding: 10px 16px;
        button {
            max-width: 100%;
        }
    }
`;

export const Panels = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.responsive.laptop}) {
        flex-direction: column;
    }
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        flex-direction: column;
    }
`;

export const VerticalDivider = styled.div`
    background-color: #f2f2f2;
    width: 1px;
    height: auto;
    margin-left: 47px;
    margin-right: 47px;
`;

export const DetailPanel = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    span:first-child {
        margin-bottom: 25px;
    }
`;

// export const ImageUploadPanel = styled.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     span:first-child {
//         margin-bottom: 25px;
//     }
// `;

export const TwoInput = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 25px;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        margin-bottom: 15px;
        flex-direction: column;
        gap: 15px;
    }
`;

export const EachInput = styled.div`
    flex: 1;
`;
