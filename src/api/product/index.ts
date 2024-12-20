import api from '../api';
import {Product} from './model';

export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await api.get('/products/all');
        console.log('Produkty:', response.data);
        return response.data as Product[];  // Używamy rzutowania, aby TypeScript wiedział, że to jest lista produktów
    } catch (error) {
        console.error('Błąd podczas pobierania produktów:', error);
        throw error;  // Rzucamy błąd dalej, aby można było go obsłużyć w miejscu wywołania
    }
}

export const getProductById = async (id: number): Promise<Product> => {
    try {
        const response = await api.get(`/products/${id}`);
        console.log('Produkt:', response.data);
        return response.data as Product;  // Rzutujemy odpowiedź na pojedynczy produkt
    } catch (error) {
        console.error('Błąd podczas pobierania produktu:', error);
        throw error;  // Rzucamy błąd dalej
    }
};

export const updateProduct = async (id: number, updatedProduct: Product): Promise<void> => {
    try {
        const response = await api.put(`/products/${id}`, updatedProduct);
        console.log('Produkt zaktualizowany:', response.data);
    } catch (error) {
        console.error('Błąd podczas aktualizacji produktu:', error);
        throw error;
    }
};

export const deleteProduct = async (id: number): Promise<void> => {
    try {
        const response = await api.delete(`/products/${id}`);
        console.log('Produkt usunięty:', response.data);
    } catch (error) {
        console.error('Błąd podczas usuwania produktu:', error);
        throw error;
    }
};

