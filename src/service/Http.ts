import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const httpClient = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    },
});
