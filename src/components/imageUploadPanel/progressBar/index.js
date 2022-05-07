import React from 'react';
import { Background, Progress, Wrapper } from './style';

const ProgressBar = ({ percent }) => {
    return (
        <Wrapper>
            <Background />
            <Progress percent={percent} />
        </Wrapper>
    );
};

export default ProgressBar;
