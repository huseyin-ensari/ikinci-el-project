import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useProducts } from '../../contexts/productsContext';
import { Text } from '../basics';
import { Divider, HorizontalMenu, MenuItem } from './style';

const CategoryPanel = ({ activeCategoryID, setActiveCategory }) => {
    const horizontalRef = useRef();
    const { categories } = useProducts();

    const handleChange = (id) => {
        if (id === 'another') {
            horizontalRef.current.scrollLeft = 0;
            setActiveCategory('all');
        } else {
            id === 'all' ? setActiveCategory('all') : setActiveCategory(id);
        }
    };

    return (
        <HorizontalMenu ref={horizontalRef}>
            <NavLink to={`/`}>
                <MenuItem
                    active={activeCategoryID === 'all' ? true : false}
                    onClick={() => handleChange('all')}>
                    <Text size={18}>Hepsi</Text>
                    <Divider />
                </MenuItem>
            </NavLink>
            {categories?.map((category) => (
                <NavLink to={`/category/${category.id}`} key={category.id}>
                    <MenuItem
                        active={activeCategoryID === category.id ? true : false}
                        onClick={() => handleChange(category.id)}>
                        <Text size={18}>{category.name}</Text>
                        <Divider />
                    </MenuItem>
                </NavLink>
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
