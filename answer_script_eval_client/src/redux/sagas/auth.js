import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { ACCESS_TOKEN, httpHeaderConfig, INVALID_TOKEN_SMS, LOGIN_ERR, LOGIN_TOKEN_EXPIRED_ERR, LOGOUT_ERR, SUCCESS } from "../../constants/constants";
import * as type from "../types";

function userLoginApi(payload) {
  return axios
    .post(`${import.meta.env.REACT_APP_API_URL}/api/login`, payload)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      console.log(err);
      return Promise.resolve(err.response.data);
    });
}

function* userLoginAction(action) {
  try {
    const res = yield call(userLoginApi, action.payload.loginRequest);
    if (res.success && res.message === SUCCESS) {
      localStorage.setItem(
        ACCESS_TOKEN,
        `${res.data.token}`
      );
      yield put({
        type: type.USER_LOGIN_SUCC,
        userDetail: res.data,
        isUserAuthenticated: true,
        navigate: action.payload.navigate,
      });
    } else {
      yield put({ type: type.USER_LOGIN_ERR, message: LOGIN_ERR });
    }
  } catch (e) {
    yield put({ type: type.USER_LOGIN_ERR, message: LOGIN_ERR });
  }
}
export function* userLoginSaga() {
  yield takeEvery(type.USER_LOGIN_REQ, userLoginAction);
}

function* userLogoutAction() {
  try {
    localStorage.removeItem(ACCESS_TOKEN);
    yield put({
      type: type.USER_LOGOUT_SUCC,
      userDetail: undefined,
      isUserAuthenticated: false,
    });
  } catch (e) {
    yield put({ type: type.USER_LOGOUT_ERR, message: LOGOUT_ERR });
  }
}
export function* userLogoutSaga() {
  yield takeEvery(type.USER_LOGOUT_REQ, userLogoutAction);
}

function getCurrentUserApi() {
  return axios
    .post(
      `${import.meta.env.REACT_APP_API_URL}/api/current`, 
      { withCredentials: true },
      httpHeaderConfig)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      return Promise.resolve(err.response.data);
    });
}
function* getCurrentUserAction() {
  try {
    const res = yield call(getCurrentUserApi);
    if (res.success) {
      localStorage.setItem(
        ACCESS_TOKEN,
        `${res.data.token}`
      );
      yield put({
        type: type.GET_CURRENT_USER_SUCC,
        userDetail: res.data && res.data.user,
        isUserAuthenticated: true,
      });
    } else if(res && res.message === INVALID_TOKEN_SMS) { window.location.replace(`${window.location.protocol}//${window.location.host}/login`); } else {
      yield put({
        type: type.GET_CURRENT_USER_ERR,
        message: LOGIN_TOKEN_EXPIRED_ERR,
      });
    }
  } catch (e) {
    yield put({
      type: type.GET_CURRENT_USER_ERR,
      message: LOGIN_TOKEN_EXPIRED_ERR,
    });
  }
}
export function* getCurrentUserSaga() {
  yield takeEvery(type.GET_CURRENT_USER_REQ, getCurrentUserAction);
}

