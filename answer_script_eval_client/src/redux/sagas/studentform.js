// sagas.js
import { takeLatest } from 'redux-saga/effects';
import { VIEW_ANSWER_SCRIPT } from '../types';

function* handleViewAnswerScript(action) {
  yield takeLatest(VIEW_ANSWER_SCRIPT);  // delete this line in future
}

export function* rootSaga() {
  yield takeLatest(VIEW_ANSWER_SCRIPT, handleViewAnswerScript);
}
