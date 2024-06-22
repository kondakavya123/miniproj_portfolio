import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types';

function getTestApi() {
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/health`)
    .then((res) => Promise.resolve(res.data))
    .catch((error) => Promise.reject(error.message));
}

function* testDataFun() {
  try {
    const res = yield call(getTestApi);
    if (res) {
      yield put({
        type: types.GET_TEST_SUCCESS,
        message: res,
      });
    } else {
      yield put({
        type: types.GET_TEST_ERROR,
        message: 'error in api call',
      });
    }
  } catch (e) {
    yield put({
      type: types.GET_TEST_ERROR,
      message: 'exception in api call',
    });
  }
}

export function* testData() {
  yield takeEvery(types.GET_TEST, testDataFun);
}
