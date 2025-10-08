import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

// You can also add interceptors here if needed, for example, to attach auth tokens.

export default API;