// sagas/initeval1.js
import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  getTestSuccess,
  getTestError,
  fetchCoursesSuccess,
  fetchCoursesFailure,
} from '../actions/initeval1';

import {GET_PROGRAMMES_ERR, GET_PROGRAMMES_SUCC, GET_PROGRAMMES_REQ, GET_COURSE_BY_PROG_SEM_REQ, GET_COURSE_BY_PROG_SEM_SUCC, GET_COURSE_BY_PROG_SEM_ERR, GET_TEST, FETCH_COURSES_REQUEST } from '../types';

// Replace this with your actual API call to fetch courses
const yourApiFunctionToFetchCourses = async (selectedProgram, selectedSemester) => {
  // Perform API call here and return the result
  // For simplicity, returning dummy data
  return [
    { key: '1', course: 'Dummy Course 1', program: 'MCA', semester: 'I SEM', action: 'view details' },
    { key: '2', course: 'Dummy Course 2', program: 'MBA', semester: 'II SEM', action: 'view details' },
  ];
};

// Dummy API call function for test data
const fetchTestApi = async () => {
  // Perform API call here and return the result
  // For simplicity, returning dummy data
  return { testProperty: 'Test Data' };
};

function* fetchCoursesSaga(action) {
  try {
    const { selectedProgram, selectedSemester } = action.payload;
    const courses = yield call(yourApiFunctionToFetchCourses, selectedProgram, selectedSemester);
    yield put(fetchCoursesSuccess(courses));
  } catch (error) {
    yield put(fetchCoursesFailure(error.message));
  }
}

function* getTestSaga() {
  try {
    const testData = yield call(fetchTestApi);
    yield put(getTestSuccess(testData));
  } catch (error) {
    yield put(getTestError(error.message));
  }
}

export function* watchFetchCourses() {
  yield takeLatest(FETCH_COURSES_REQUEST, fetchCoursesSaga);
}

export function* watchGetTest() {
  yield takeLatest(GET_TEST, getTestSaga);
}

// ======================================
function getAllProgrammesApi(){
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/api/programmes`)
    .then((res)=>{
      return Promise.resolve(res.data);
    })
    .catch((error)=>{
      return Promise.reject(error.message);
    });
}

function* getAllProgrammesHandler(){
  try{
    const res= yield call (getAllProgrammesApi);
    if(res){
      yield put({
        type: GET_PROGRAMMES_SUCC,
        data: res.data
      });
    }
    else{
      yield put({
        type: GET_PROGRAMMES_ERR,
        message:'error in api call'
      });
    }
  }
  catch(e){
    yield put({
      type: GET_PROGRAMMES_ERR,
      message:'exception in api call'
    });
  }
}
export function* getAllProgrammesSage() {
  yield takeLatest(GET_PROGRAMMES_REQ, getAllProgrammesHandler);
}


function getCourseByProgIdAndSemAPI(payload){
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/api/courses/program/${payload.payload.selectedProgrammetId}/sem/${payload.payload.selectedSemester}`)
    .then((res)=>{
      return Promise.resolve(res.data);
    })
    .catch((error)=>{
      return Promise.reject(error.message);
    });
}

function* getCourseByProgIdAndSemHandler(payload){
  try{
    const res= yield call(getCourseByProgIdAndSemAPI, payload);
    if(res){
      yield put({
        type: GET_COURSE_BY_PROG_SEM_SUCC,
        data: res.data
      });
    }
    else{
      yield put({
        type: GET_COURSE_BY_PROG_SEM_ERR,
        message:'error in api call'
      });
    }
  }
  catch(e){
    yield put({
      type: GET_COURSE_BY_PROG_SEM_ERR,
      message:'exception in api call'
    });
  }
}

export function* getCourseByProgIdAndSemSaga() {
  yield takeLatest(GET_COURSE_BY_PROG_SEM_REQ, getCourseByProgIdAndSemHandler);
}

