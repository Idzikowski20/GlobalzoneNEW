import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'https://global-zone-610c99f022ed.herokuapp.com',
});

export default api;