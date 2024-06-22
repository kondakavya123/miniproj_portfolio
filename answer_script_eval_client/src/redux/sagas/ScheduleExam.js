import { takeLatest, call, put } from 'redux-saga/effects';
import {
  SAVE_SCHEDULE_EXAM_REQ,
  SAVE_SCHEDULE_EXAM_SUCC,
  SAVE_SCHEDULE_EXAM_ERR,
} from '../types';
import axios from 'axios';

// Replace 'apiCallToScheduleExam' with your actual API call function
// This function should handle the API call to store the form data
const apiCallToScheduleExam = (formData) => {
  return axios
    .post(`${import.meta.env.REACT_APP_API_URL}/api/schedule-exam`, formData)
    .then((res) => Promise.resolve(res.data))
    .catch((error) => Promise.reject(error.message));
};

function* scheduleExamWorker(action) {
  try {
    const res = yield call(apiCallToScheduleExam, action.payload);
    if (res) {
      yield put({
        type: SAVE_SCHEDULE_EXAM_SUCC,
        data: res.data,
        message: res.message,
      });
    } else {
      yield put({
        type: SAVE_SCHEDULE_EXAM_ERR,
        message: 'Error in API call',
      });
    }
  } catch (e) {
    yield put({
      type: SAVE_SCHEDULE_EXAM_ERR,
      message: 'Exception in API call',
    });
  }
}

export function* watchScheduleExam() {
  yield takeLatest(SAVE_SCHEDULE_EXAM_REQ, scheduleExamWorker);
}
