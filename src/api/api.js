import axios from 'axios';
import { LOGIN_ENDPOINT } from './endpoints';

const apiInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});
export const loginRequest = (username, password) => {
    return apiInstance.post(LOGIN_ENDPOINT, { username, password });
  };