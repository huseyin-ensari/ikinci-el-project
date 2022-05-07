import React from 'react';
import { InputGrey } from '../basics/Inputs';
import { CurrencyUnit, InputWrapper } from './style';

const PriceInput = ({ placeholder, onChange, onBlur, error, name }) => {
    return (
        <InputWrapper>
            <InputGrey
                id={name}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                error={error}
            />
            <CurrencyUnit>TL</CurrencyUnit>
        </InputWrapper>
    );
};

export default PriceInput;
