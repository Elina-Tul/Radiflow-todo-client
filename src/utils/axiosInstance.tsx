import axios from 'axios';
import { SERVER_BASE_URL, SERVER_PORT } from '../const';

const axiosInstance = axios.create({
    baseURL: `${SERVER_BASE_URL}:${SERVER_PORT}`,
    timeout: 3000,
  });

  export default axiosInstance;