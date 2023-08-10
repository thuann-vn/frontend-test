import { LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';
import { loginRequest } from '../../api/api';

export const home = (username, password) => async dispatch => {
  try {
    const response = await loginRequest(username, password);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};