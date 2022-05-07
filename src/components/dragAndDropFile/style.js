import styled from 'styled-components';

export const DragAndDropContainer = styled.div`
    cursor: pointer;
    width: 100%;
    padding: 20px 0;
    gap: 5px;
    border: 1px dashed #b1b1b1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
        span:last-child {
            display: block;
        }
        span {
            display: none;
        }
    }
`;

export const ChoseImage = styled.div`
    background-color: #f4f4f4;
    border-radius: 15px;
    color: #b1b1b1;
    text-align: center;
    padding: 5px 20px;
    font-size: 15px;
`;
