import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useParams } from 'react-router-dom';
import { CategoryPanel } from '../../components';
import { BoldText, Container, Loader, Text } from '../../components/basics';
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

const baseURL = process.env.REACT_APP_API_BASE_URL;

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const { allProducts, nextPage, productCount } = useProducts();
    const { categoryID } = useParams();
    useEffect(() => {
        categoryID
            ? setActiveCategory(Number(categoryID))
            : setActiveCategory('all');
    }, []);

    useEffect(() => {
        if (activeCategory === 'all') {
            setProducts([...allProducts]);
            return;
        }
        const filteredList = allProducts.filter(
            (product) => product?.category?.id === activeCategory
        );
        setProducts([...filteredList]);
    }, [activeCategory, allProducts]);

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
                <InfiniteScroll
                    dataLength={allProducts.length}
                    next={nextPage}
                    endMessage={<h1>Bütün Ürünleri Gördünüz</h1>}
                    hasMore={productCount > allProducts.length}
                    style={{ overflow: 'hidden' }}
                    initialScrollY={300}
                    loader={<Loader />}>
                    <ProductList>
                        {products.length > 0 &&
                            products.map((product) => (
                                <Link
                                    to={`/product/${product?.id}`}
                                    key={product?.id}>
                                    <ProductCard>
                                        <div>
                                            <img
                                                src={
                                                    baseURL +
                                                    product?.image?.url
                                                }
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
                </InfiniteScroll>
            </Container>
        </BasicLayout>
    );
};

export default HomePage;
