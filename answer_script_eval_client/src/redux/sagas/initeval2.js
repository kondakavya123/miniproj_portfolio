import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_STUDENT_DATA,
  EXTRACT_PDF,
  EVALUATE_ANSWER_SCRIPT,
} from '../types';
import {
  apiCallToFetchStudentData,
  apiCallToExtractPdf,
  apiCallToEvaluateAnswerScript,
} from '../../services/api';
import {
  fetchStudentDataSuccessAction,
  fetchStudentDataErrorAction,
  extractPdfSuccessAction,
  extractPdfErrorAction,
  evaluateAnswerScriptSuccessAction,
  evaluateAnswerScriptErrorAction,
} from '../actions/initeval2';

function* fetchStudentDataSaga() {
  try {
    const students = yield call(apiCallToFetchStudentData);
    yield put(fetchStudentDataSuccessAction(students));
  } catch (error) {
    yield put(fetchStudentDataErrorAction(error));
  }
}

function* extractPdfSaga(action) {
  try {
    const { regNo, pdfFileName } = action.payload;
    const pdfText = yield call(apiCallToExtractPdf, regNo, pdfFileName);
    yield put(extractPdfSuccessAction(regNo, pdfText));
  } catch (error) {
    yield put(extractPdfErrorAction(error));
  }
}

function* evaluateAnswerScriptSaga(action) {
  try {
    const { regNo, pdfText } = action.payload;
    const result = yield call(apiCallToEvaluateAnswerScript, regNo, pdfText);
    yield put(evaluateAnswerScriptSuccessAction(regNo, result));
  } catch (error) {
    yield put(evaluateAnswerScriptErrorAction(error));
  }
}

export default function* initeval2Saga() {
  yield takeLatest(FETCH_STUDENT_DATA, fetchStudentDataSaga);
  yield takeLatest(EXTRACT_PDF, extractPdfSaga);
  yield takeLatest(EVALUATE_ANSWER_SCRIPT, evaluateAnswerScriptSaga);
}
