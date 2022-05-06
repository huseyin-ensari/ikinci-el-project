import { createContext, useState, useEffect, useContext } from 'react';
import { fetchCategories } from '../services/categoryServices';
import { fetchProducts } from '../services/productServices';

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const response = await fetchCategories();
        setCategories([...response.data]);
    };

    const getProducts = async () => {
        const response = await fetchProducts();
        setAllProducts([...response.data]);
    };

    useEffect(() => {
        const setData = async () => {
            await getCategories();
            await getProducts();
        };
        setData();
    }, []);

    const values = {
        allProducts,
        categories
    };

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);
export default ProductsContextProvider;
