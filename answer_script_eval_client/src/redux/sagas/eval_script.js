// src/redux/sagas/eval_script2.js
/*
import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFailure } from '../actions/eval_script';

const fetchApiData = () => {
  // Replace this with your actual API endpoint
  return axios.get('http://localhost:8080/api/courses').then((response) => response.data);
};

function* fetchData() {
  try {
    const data = yield call(fetchApiData);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}

export default watchFetchData;
*/

 
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types';

import { ACCESS_TOKEN } from '../../constants/constants';


function getCourseApi(){
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/api/courses`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem(ACCESS_TOKEN),
      },
    })
    .then((res)=>{
      return Promise.resolve(res.data);
    })
    .catch((error)=>{
      return Promise.reject(error.message);
    });
}

function* getCourseFun(){
  try{
    const res = yield call (getCourseApi);
    if(res){
      yield put({
        type: types.FETCH_DATA_SUCCESS,
        data: res.data
      });
    }
    else{
      yield put({
        type:types.FETCH_DATA_FAILURE,
        message:'error in api call'
      });
    }
  }
  catch(e){
    yield put({
      type:types.FETCH_DATA_FAILURE,
      message:'exception in api call'
    });
  }
}
export function* getCourseSaga(){
  yield takeEvery(types.FETCH_DATA_REQUEST, getCourseFun);
}