
import { combineReducers } from 'redux';
import initeval2Reducer from './initeval2';

const rootReducer = combineReducers({
  initeval2Data: initeval2Reducer,
  
});

export default rootReducer;
