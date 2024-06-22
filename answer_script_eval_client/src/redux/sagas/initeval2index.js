
import { all } from 'redux-saga/effects';
import initeval2Saga from './initeval2';

export default function* rootSaga() {
  yield all([
    initeval2Saga(),
  
  ]);
}
