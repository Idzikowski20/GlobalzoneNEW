import {getAllProducts} from "../api/product";
import {useEffect, useState} from "react";
import {Product} from "../api/product/model";


export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (err) {
                setError('Błąd podczas pobierania produktów');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const cookiesList = products.filter(product => product.productCategory === 'Ciastka') ?? [];
    const brykietList = products.filter(product => product.productCategory === 'Brykiet') ?? [];
    const peletList = products.filter(product => product.productCategory === 'Pelet') ?? [];
    const paletList = products.filter(product => product.productCategory === 'Palety') ?? [];

    return {
        cookiesList,
        brykietList,
        peletList,
        paletList
    };
};