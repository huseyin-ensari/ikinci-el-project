import React from 'react';
import { Text } from '../basics';
import { Background, Progress, Wrapper, WrapperProgressBar } from './style';

const ProgressBar = ({ percent }) => {
    return (
        <Wrapper>
            <WrapperProgressBar>
                <Text size={12}>%{percent}</Text>
                <Background />
                <Progress percent={percent} />
                <Text size={12}>Yükleniyor</Text>
            </WrapperProgressBar>
        </Wrapper>
    );
};

export default ProgressBar;
