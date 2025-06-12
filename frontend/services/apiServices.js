import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // replace with your backend URL
    withCredentials: true, // if using cookie-based sessions
});

export default API;
