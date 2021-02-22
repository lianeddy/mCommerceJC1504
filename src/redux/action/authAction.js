import {local} from '../../../localip';
import axios from 'axios';
import {AUTH_FAILED, AUTH_START, AUTH_SUCCESS, NULLIFY_ERROR} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
const url = `${local}/user`;

// /login
// /register
// /keep-login

export const loginAction = (loginData) => {
  return async (dispatch) => {
    try {
      dispatch({type: AUTH_START});
      const response = await axios.post(`${url}/login`, loginData);
      const {id, username, email, roleID, token} = response.data;
      await AsyncStorage.setItem('token', token);
      dispatch({type: AUTH_SUCCESS, payload: {id, username, email, roleID}});
    } catch (err) {
      dispatch({type: AUTH_FAILED, payload: err.response.data.message});
    }
  };
};

export const dismissErrorAction = () => {
  return {
    type: NULLIFY_ERROR,
  };
};
export const registerAction = () => {};
export const keepLoginAction = () => {};
