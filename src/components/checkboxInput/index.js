import React from 'react';
import { CheckedIcon, NotCheckedIcon } from '../../constants/icons';
import { Icon, Label, Wrapper } from './style';

const Checkbox = ({ checked, label, onChange }) => {
    return (
        <Wrapper checked={checked} onClick={onChange}>
            <Icon>{checked ? <CheckedIcon /> : <NotCheckedIcon />}</Icon>
            <Label checked={checked}>{label}</Label>
        </Wrapper>
    );
};

export default Checkbox;
