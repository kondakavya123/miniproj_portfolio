import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_STUDENTS_SUCC,
  FETCH_STUDENTS_ERR,
  FETCH_STUDENTS,
  SAVE_Q_ANS_SCRIPT_REQ,
  SAVE_Q_ANS_SCRIPT_SUCC,
  SAVE_Q_ANS_SCRIPT_ERR,
} from '../types';
import { ACCESS_TOKEN } from '../../constants/constants';

function fetchStudentsWorkerApi() {
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/api/students`)
    .then((res) => Promise.resolve(res.data))
    .catch((error) => Promise.reject(error.message));
}

function* fetchStudentsWorker(action) {
  const { query } = action;

  try {
    const res = yield call(fetchStudentsWorkerApi, query);
    if (res) {
      yield put({
        type: FETCH_STUDENTS_SUCC,
        data: res.data,
      });
    } else {
      yield put({
        type: FETCH_STUDENTS_ERR,
        message: 'error in api call',
      });
    }
  } catch (e) {
    yield put({
      type: FETCH_STUDENTS_ERR,
      message: 'exception in api call',
    });
  }
}

export function* fetchStudentsWatcher() {
  yield takeLatest(FETCH_STUDENTS, fetchStudentsWorker);
}



const saveAnswerScriptAndQuestionsApi = (formData) => {
  return axios
    .post(`${import.meta.env.REACT_APP_API_URL}/api/q-ans-script`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem(ACCESS_TOKEN),
      },
    })
    .then((res) => Promise.resolve(res.data))
    .catch((error) => Promise.reject(error.message));
};

function* saveAnswerScriptAndQuestionsWorker(action) {
  try {
    const res = yield call(saveAnswerScriptAndQuestionsApi, action.payload);
    if (res) {
      yield put({
        type: SAVE_Q_ANS_SCRIPT_SUCC,
        data: res.data,
        message: res.message,
      });
    } else {
      yield put({
        type: SAVE_Q_ANS_SCRIPT_ERR,
        message: 'Error in API call',
      });
    }
  } catch (e) {
    yield put({
      type: SAVE_Q_ANS_SCRIPT_ERR,
      message: 'Exception in API call',
    });
  }
}

export function* saveAnswerScriptAndQuestionsSaga() {
  yield takeLatest(SAVE_Q_ANS_SCRIPT_REQ, saveAnswerScriptAndQuestionsWorker);
}


