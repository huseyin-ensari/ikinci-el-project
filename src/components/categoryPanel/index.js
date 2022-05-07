import React, { useRef } from 'react';
import { useProducts } from '../../contexts/productsContext';
import { Text } from '../basics';
import { Divider, HorizontalMenu, MenuItem } from './style';

const CategoryPanel = ({ activeCategoryID, setActiveCategory }) => {
    const denemeRef = useRef();
    const { categories } = useProducts();

    const handleChange = (id) => {
        if (id === 'another') {
            denemeRef.current.scrollLeft = 0;
            setActiveCategory('all');
        } else {
            id === 'all' ? setActiveCategory('all') : setActiveCategory(id);
        }
    };

    return (
        <HorizontalMenu ref={denemeRef}>
            <MenuItem
                active={activeCategoryID === 'all' ? true : false}
                onClick={() => handleChange('all')}>
                <Text size={18}>Hepsi</Text>
                <Divider />
            </MenuItem>
            {categories?.map((category) => (
                <MenuItem
                    key={category.id}
                    active={activeCategoryID === category.id ? true : false}
                    onClick={() => handleChange(category.id)}>
                    <Text size={18}>{category.name}</Text>
                    <Divider />
                </MenuItem>
            ))}
            <MenuItem
                active={activeCategoryID === 'another' ? true : false}
                onClick={() => handleChange('another')}>
                <Text size={18}>Diğer</Text>
                <Divider />
            </MenuItem>
        </HorizontalMenu>
    );
};

export default CategoryPanel;
