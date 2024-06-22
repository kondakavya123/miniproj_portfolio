// answer_script_eval_client\answer_script_eval_client\src\redux\sagas/upload1.js

import { takeLatest, put, call } from 'redux-saga/effects';
import {
  SUBMIT_FORM_REQUEST,
  submitFormSuccess,
  submitFormFailure,
} from '../actions/uploadscripts';
import { uploadScriptsApi } from '../../api'; 

function* submitFormSaga(action) {
  try {
    yield call(uploadScriptsApi.submitForm, action.payload);
    yield put(submitFormSuccess());
  } catch (error) {
    yield put(submitFormFailure(error.message));
  }
}

// Watcher Saga
function* watchUpload1() {
  yield takeLatest(SUBMIT_FORM_REQUEST, submitFormSaga);
  // Add more watchers if needed
}

export default watchUpload1;
