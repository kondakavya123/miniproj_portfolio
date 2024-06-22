import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_COURSE, FETCH_COURSE_SUCC, FETCH_COURSE_ERR } from '../types';
import axios from 'axios';


function fetchCourseWorkerApi(){
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/api/courses`)
    .then((res)=>{
      return Promise.resolve(res.data);
    })
    .catch((error)=>{
      return Promise.reject(error.message);
    });
}

function* fetchCourseWorker(){
  try{
    const res= yield call (fetchCourseWorkerApi);
    if(res){
      yield put({
        type:FETCH_COURSE_SUCC,
        data: res.data
      });
    }
    else{
      yield put({
        type: FETCH_COURSE_ERR,
        message:'error in api call'
      });
    }
  }
  catch(e){
    yield put({
      type: FETCH_COURSE_ERR,
      message:'exception in api call'
    });
  }
}

export function* fetchCourseWatcher() {
  yield takeLatest(FETCH_COURSE, fetchCourseWorker);
}