// answer_script_eval_client\answer_script_eval_client\src\redux\reducers\index.js

import { combineReducers } from 'redux';
import upload1Reducer from './upload1';

const rootReducer = combineReducers({
  upload1: upload1Reducer,
  // Add more reducers if needed
});

export default rootReducer;
