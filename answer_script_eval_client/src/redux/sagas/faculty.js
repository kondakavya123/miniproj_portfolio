import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_FACULTY, FETCH_FACULTY_SUCC , FETCH_FACULTY_ERR } from '../types';
import axios from 'axios';


function fetchFacultyWorkerApi(){
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/api/faculty`)
    .then((res)=>{
      return Promise.resolve(res.data);
    })
    .catch((error)=>{
      return Promise.reject(error.message);
    });
}

function* fetchFacultyWorker(){
  try{
    const res= yield call (fetchFacultyWorkerApi);
    if(res){
      yield put({
        type:FETCH_FACULTY_SUCC,
        data: res.data
      });
    }
    else{
      yield put({
        type: FETCH_FACULTY_ERR,
        message:'error in api call'
      });
    }
  }
  catch(e){
    yield put({
      type: FETCH_FACULTY_ERR,
      message:'exception in api call'
    });
  }
}

export function* fetchFacultyWatcher() {
  yield takeLatest(FETCH_FACULTY, fetchFacultyWorker);
}