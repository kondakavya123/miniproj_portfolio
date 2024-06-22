// answer_script_eval_client\answer_script_eval_client\src\redux\sagas\index.js

import { all } from 'redux-saga/effects';
import watchUpload1 from './upload1';

function* rootSaga() {
  yield all([
    watchUpload1(),
    // Add more sagas if needed
  ]);
}

export default rootSaga;
