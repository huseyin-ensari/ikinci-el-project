import { createContext, useState, useEffect, useContext } from 'react';
import { Loader } from '../components/basics';
import { fetchCategories } from '../services/categoryServices';
import { fetchProductCount, fetchProducts } from '../services/productServices';

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productCount, setProductCount] = useState(0);
    const [page, setPage] = useState(1);

    const getCategories = async () => {
        const { data } = await fetchCategories();
        setCategories([...data]);
    };

    const getProductCount = async () => {
        const { data } = await fetchProductCount();
        setProductCount(data);
    };

    const nextPage = () => setPage(page + 1);
    const resetPage = (newProduct) => {
        setAllProducts([newProduct, ...allProducts]);
    };

    const getProducts = async () => {
        const limit = 15;
        let skipProducts = productCount - limit * page;
        if (skipProducts <= 0) skipProducts = 0;
        const { data } = await fetchProducts(skipProducts);
        return data.reverse();
    };

    useEffect(() => {
        const setData = async () => {
            const response = await getProducts();
            setAllProducts([...allProducts, ...response]);
        };
        if (productCount !== 0) setData();
    }, [page]);

    useEffect(() => {
        const setData = async () => {
            await getProductCount();
            const response = await getProducts();
            setAllProducts([...response]);
        };
        setData();
        setLoading(false);
    }, [productCount]);

    useEffect(() => {
        const setData = async () => {
            await getCategories();
        };
        setData();
    }, []);

    const values = {
        allProducts,
        categories,
        nextPage,
        resetPage,
        productCount
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
export default ProductsContextProvider;
