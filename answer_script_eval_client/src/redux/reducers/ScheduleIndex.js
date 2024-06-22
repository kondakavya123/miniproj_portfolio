import { combineReducers } from 'redux';
import testReducerData from './test';

const rootReducer = combineReducers({
  testRducerData: testReducerData,
});

export default rootReducer;
