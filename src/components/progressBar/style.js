import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    border: 1px dashed #b1b1b1;
    border-radius: 10px;
    margin-bottom: 25px;
`;

export const WrapperProgressBar = styled.div`
    margin: 70px 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 4px;
    position: relative;
    @media (max-width: ${({ theme }) => theme.responsive.tablet}) {
        margin: 70px 50px;
    }
`;

export const BaseBox = styled.div`
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 3px;
    transition: width 10s ease-in-out;
`;

export const Background = styled(BaseBox)`
    background-color: #eaeaea;
    width: 100%;
`;

export const Progress = styled(BaseBox)`
    background-color: #4b9ce2;
    width: ${({ percent }) => `${percent}%`};
`;
