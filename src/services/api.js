import axios from 'axios';

const api = axios.create({
    baseURL: "http://161.35.4.195:3333",
})

export default api;