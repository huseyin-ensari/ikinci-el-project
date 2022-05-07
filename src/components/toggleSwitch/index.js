import React from 'react';
import { Text } from '../basics';
import {
    ToggleContainer,
    CheckBox,
    CheckBoxLabel,
    CheckBoxWrapper
} from './style';

const ToggleSwitch = ({ label, checked, setChecked }) => {
    return (
        <ToggleContainer>
            <Text size={16}>{label}</Text>
            <CheckBoxWrapper>
                <CheckBox
                    id='checkbox'
                    type='checkbox'
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <CheckBoxLabel htmlFor='checkbox' />
            </CheckBoxWrapper>
        </ToggleContainer>
    );
};

export default ToggleSwitch;
