import { createContext, useState, useEffect, useContext } from 'react';
import { Loader } from '../components/basics';
import { fetchCategories } from '../services/categoryServices';
import { fetchProducts } from '../services/productServices';

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

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
        setLoading(false);
    }, []);

    const values = {
        allProducts,
        categories
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
