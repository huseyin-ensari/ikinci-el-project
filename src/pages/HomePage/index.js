import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CategoryPanel } from '../../components';
import { BoldText, Container, Text } from '../../components/basics';
import { banner } from '../../constants/images';
import { useProducts } from '../../contexts/productsContext';
import BasicLayout from '../../layouts/Basic';
import { imgNotFound } from '../../constants/images';
import {
    Image,
    ProductList,
    ProductCard,
    Empty,
    ProductInformation,
    Price
} from './style';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const { allProducts } = useProducts();
    const baseURL = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        setProducts([...allProducts]);
    }, [allProducts]);

    useEffect(() => {
        if (activeCategory === 'all') {
            setProducts([...allProducts]);
            return;
        }
        const filteredList = allProducts.filter(
            (product) => product.category.id === activeCategory
        );
        setProducts([...filteredList]);
    }, [activeCategory]);

    return (
        <BasicLayout>
            <Container>
                <Image src={banner} alt='banner' />
                <CategoryPanel
                    activeCategoryID={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
                {products.length === 0 && (
                    <Empty>Bu kategoride hiç ürün yok.</Empty>
                )}
                <ProductList>
                    {products.length > 0 &&
                        products.reverse().map((product) => (
                            <Link
                                to={`/product/${product?.id}`}
                                key={product?.id}>
                                <ProductCard>
                                    <div>
                                        <img
                                            src={baseURL + product?.image?.url}
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    imgNotFound;
                                            }}
                                        />
                                    </div>
                                    <ProductInformation>
                                        <BoldText size={15}>
                                            {product?.brand}
                                        </BoldText>
                                        <Text size={13}>
                                            <b>Renk: </b>
                                            {product?.color}
                                        </Text>
                                    </ProductInformation>
                                    <Price>{product?.price} TL</Price>
                                </ProductCard>
                            </Link>
                        ))}
                </ProductList>
            </Container>
        </BasicLayout>
    );
};

export default HomePage;
