import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_PROGRAM, FETCH_PROGRAM_ERR, FETCH_PROGRAM_SUCC } from '../types';


function fetchProgramWorkerApi(){
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/api/programmes`)
    .then((res)=>{
      return Promise.resolve(res.data);
    })
    .catch((error)=>{
      return Promise.reject(error.message);
    });
}

function* fetchProgramWorker(){
  try{
    const res= yield call (fetchProgramWorkerApi);
    if(res){
      yield put({
        type: FETCH_PROGRAM_SUCC,
        data: res.data,
      });
    }
    else{
      yield put({
        type: FETCH_PROGRAM_ERR,
        message:'error in api call'
      });
    }
  }
  catch(e){
    yield put({
      type: FETCH_PROGRAM_ERR,
      message:'exception in api call'
    });
  }
}
export function* fetchProgramWatcher(){
  yield takeEvery(FETCH_PROGRAM, fetchProgramWorker);
}

