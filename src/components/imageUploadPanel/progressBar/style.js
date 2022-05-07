import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 295px;
    padding-top: 70;
    padding-bottom: 70;
    height: 4px;
    position: relative;
`;

export const BaseBox = styled.div`
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 3px;
    transition: width 5s ease-in-out;
`;

export const Background = styled(BaseBox)`
    background-color: #eaeaea;
    width: 100%;
`;

export const Progress = styled(BaseBox)`
    background-color: #4b9ce2;
    width: ${({ percent }) => `${percent}%`};
`;
