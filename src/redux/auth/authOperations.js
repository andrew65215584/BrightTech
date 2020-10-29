// import axios from 'axios';
// import { getDBSuccess } from '../actions';
import {
  postUserInfoFetch,
  postUserInfoSuccess,
  postUserInfoError,
  loginUserSuccess,
  loginUserFetch,
  loginUserError,
  logoutUserFetch,
  logoutUserSuccess,
  logoutUserError,
  getCurrentUserSuccess,
} from './authActions';

// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },

//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// зарегистрировать одного пользователя

export const postUserInfo = param => async (dispatch, getstaate) => {
  dispatch(postUserInfoFetch());

  try {
    // const registerUser = await axios.post('/users/signup', param);

    // token.set('vslsvlsvjlsc');
    dispatch(postUserInfoSuccess(param));
  } catch (e) {
    console.log(e);

    dispatch(postUserInfoError(e));
  }
};

// Залогинитьь
export const loginUser = param => async (dispatch, getstaate) => {
  dispatch(loginUserFetch());

  try {
    // const loginUser = await axios.post('/users/login', param);

    // token.set(loginUser.data.token);
    dispatch(loginUserSuccess(param));

    localStorage.setItem('tokenLocal', "yes");
  } catch (e) {
    console.log(e);

    dispatch(loginUserError(e));
  }
};

// Разлогинить

export const logOut = param => async (dispatch, getstate) => {
  dispatch(logoutUserFetch());

  try {
    // await axios.post('/users/logout');

    // token.unset();
    dispatch(logoutUserSuccess());
    localStorage.setItem('tokenLocal', '');
  } catch (error) {
    dispatch(logoutUserError(error));
  }
};

// Получить инфу о текущем пользователе

export const getCurrentUser = param => async (dispatch, getstate) => {
  // const {
  //   auth: { token: persistedToken },
  // } = getstate();

  // if (!persistedToken) {
  //   return;
  // }

  // token.set(persistedToken);

  try {
    // const response = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess());
    // const data = await axios.get(`/contacts`);
    // dispatch(getDBSuccess(data.data));
  } catch (error) {}
};

// export const getCurrentUser = param => async (dispatch, getstate) => {
//   const tokenLocal = localStorage.getItem('tokenLocal');
//
//   if (!tokenLocal) {
//     return
//   }
//   token.set(tokenLocal);
//   const user = await axios.get('/users/current')

//   dispatch(getCurrentUserSuccess(user.data));
// };
