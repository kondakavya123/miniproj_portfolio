import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as type from "../types";
import { ACCESS_TOKEN } from '../../constants/constants';


function getScheduledExamApi(payload) {
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/api/scheduled-exam/${payload.selectedProgrammeId}/${payload.selectedSemester}`, {
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

function* getScheduledExamAction(action) {
  try {
    const res = yield call(getScheduledExamApi, action.payload);
    if (res.success) {
      yield put({
        type: type.GET_SCHEDULED_EXAM_SUCC,
        data: res.data,
      });
    } else {
      yield put({ type: type.GET_SCHEDULED_EXAM_ERR, message: "error in api call" });
    }
  } catch (e) {
    yield put({ type: type.GET_SCHEDULED_EXAM_ERR, message: "exception in api call" });
  }
}
export function* getScheduledExamSaga() {
  yield takeEvery(type.GET_SCHEDULED_EXAM_REQ, getScheduledExamAction);
}

function getStudentAnsScriptByProgSemCourseApi(payload) {
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/api/student-ans-script/${payload.programmeId}/${payload.courseId}/${payload.semester}`, {
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

function* getStudentAnsScriptByProgSemCourseAction(action) {
  try {
    const res = yield call(getStudentAnsScriptByProgSemCourseApi, action.payload);
    if (res.success) {
      yield put({
        type: type.GET_STUD_ANS_SCRIPT_BY_PROG_SEM_COURSE_SUCC,
        data: res.data,
      });
    } else {
      yield put({ type: type.GET_STUD_ANS_SCRIPT_BY_PROG_SEM_COURSE_ERR, message: "error in api call" });
    }
  } catch (e) {
    yield put({ type: type.GET_STUD_ANS_SCRIPT_BY_PROG_SEM_COURSE_ERR, message: "exception in api call" });
  }
}
export function* getStudentAnsScriptByProgSemCourseSaga() {
  yield takeEvery(type.GET_STUD_ANS_SCRIPT_BY_PROG_SEM_COURSE_REQ, getStudentAnsScriptByProgSemCourseAction);
}


function verifyStudentMarksApi(payload) {
  return axios
    .put(`${import.meta.env.REACT_APP_API_URL}/api/verify/${payload}`, {
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

function* verifyStudentMarksAction(action) {
  try {
    const res = yield call(verifyStudentMarksApi, action.payload);
    if (res.success) {
      yield put({
        type: type.VERIFY_SUCC,
        data: res.data,
        message: res.message,
      });
    } else {
      yield put({ type: type.VERIFY_ERR, message: "error in api call" });
    }
  } catch (e) {
    yield put({ type: type.VERIFY_ERR, message: "exception in api call" });
  }
}
export function* verifyStudentMarksSaga() {
  yield takeEvery(type.VERIFY_REQ, verifyStudentMarksAction);
}



function saveCommentsApi(payload) {
  return axios
    .put(`${import.meta.env.REACT_APP_API_URL}/api/save-comment`, payload, {
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

function* saveCommentsAction(action) {
  try {
    const res = yield call(saveCommentsApi, action.payload);
    if (res.success) {
      yield put({
        type: type.SAVE_COMMENT_SUCC,
        data: res.data,
        message: res.message,
      });
    } else {
      yield put({ type: type.SAVE_COMMENT_ERR, message: "error in api call" });
    }
  } catch (e) {
    yield put({ type: type.SAVE_COMMENT_ERR, message: "exception in api call" });
  }
}
export function* saveCommentsSaga() {
  yield takeEvery(type.SAVE_COMMENT_REQ, saveCommentsAction);
}



function extractApi(payload) {
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/api/extract/${payload}`, {
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

function* extractAction(action) {
  try {
    const res = yield call(extractApi, action.payload);
    if (res.success) {
      yield put({
        type: type.EXTRACT_SUCC,
        data: res.data,
        message: res.message,
      });
    } else {
      yield put({ type: type.EXTRACT_ERR, message: "error in api call" });
    }
  } catch (e) {
    yield put({ type: type.EXTRACT_ERR, message: "exception in api call" });
  }
}
export function* extractSaga() {
  yield takeEvery(type.EXTRACT_REQ, extractAction);
}



function evaluateApi(payload) {
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/api/evaluate/${payload}`, {
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

function* evaluateAction(action) {
  try {
    const res = yield call(evaluateApi, action.payload);
    if (res.success) {
      yield put({
        type: type.EVALUATE_SUCC,
        data: res.data,
        message: res.message,
      });
    } else {
      yield put({ type: type.EVALUATE_ERR, message: "error in api call" });
    }
  } catch (e) {
    yield put({ type: type.EVALUATE_ERR, message: "exception in api call" });
  }
}
export function* evaluateSaga() {
  yield takeEvery(type.EVALUATE_REQ, evaluateAction);
}

