import React, { useState } from 'react';
import { DownArrow } from '../../constants/icons';
import {
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    DropDownListContainer,
    ListItem,
    Main
} from './style';

const DropDownMenu = ({
    selectedOption,
    setSelectedOption,
    options,
    error
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => {
        setSelectedOption(value.name);
        setIsOpen(false);
    };

    return (
        <Main>
            <DropDownContainer>
                <DropDownHeader onClick={toggling} error={error}>
                    {selectedOption}
                    <DownArrow reverse={isOpen ? true : false} />
                </DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {options.map((option, index) => (
                                <ListItem
                                    onClick={() => onOptionClicked(option)}
                                    key={option.id || index}>
                                    {option.name}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </Main>
    );
};

export default DropDownMenu;
