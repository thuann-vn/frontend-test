import axios from 'axios';
import { LOGIN_ENDPOINT } from './endpoints';
import moment from 'moment';

const apiInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});
export const loginRequest = (username, password) => {
  return apiInstance.post(LOGIN_ENDPOINT, { username, password });
};

export const fetchRecords = (type = 'all') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeData = [
        {
          date: moment().format('MM.DD'),
          type: 'morning',
          image: 'Imagine/foods/m01.jpg'
        },
        {
          date: moment().format('MM.DD'),
          type: 'lunch',
          image: 'Imagine/foods/l03.jpg'
        },
        {
          date: moment().format('MM.DD'),
          type: 'dinner',
          image: 'Imagine/foods/d01.jpg'
        },
        {
          date: moment().format('MM.DD'),
          type: 'snack',
          image: 'Imagine/foods/l01.jpg'
        },
        {
          date: moment().subtract(1, 'day').format('MM.DD'),
          type: 'morning',
          image: 'Imagine/foods/m01.jpg'
        },
        {
          date: moment().subtract(1, 'day').format('MM.DD'),
          type: 'lunch',
          image: 'Imagine/foods/l02.jpg'
        },
        {
          date: moment().subtract(1, 'day').format('MM.DD'),
          type: 'dinner',
          image: 'Imagine/foods/d02.jpg'
        },
        {
          date: moment().subtract(1, 'day').format('MM.DD'),
          type: 'snack',
          image: 'Imagine/foods/s01.jpg'
        },
      ];

      if (type !== 'all') {
        resolve(fakeData).filter((item) => item.type === type);
      } else {
        resolve(fakeData);
      }
    }, 0);
  });
}