// C:\Users\user2\Desktop\ASE_PRO\answer_script_eval_client\src\redux\reducers\index.js

/*import { combineReducers } from 'redux';
import evalScriptReducer from './eval_script1';

// Add other reducers if needed

const rootReducer = combineReducers({
  evalScript: evalScriptReducer,
  // Add other reducer slices if needed
});

export default rootReducer;
*/

import { notification } from "antd";
import * as types from '../types';
// eslint-disable-next-line no-unused-vars
import { ERROR_APP_HEADING, SUCCES_APP_HEADING } from "../../constants/constants";

const initialState = {
  isLoading: false,
  courses: [],
};

export default function coordinator(state = initialState, action) {
  switch (action.type) {
  case types.GET_COURSE_REQ:
    return {
      ...state,
      isLoading: true,
    };
  case types.GET_COURSE_SUCC:
    return{
      ...state,
      courses: action.data,
      isLoading: false,
    };
  case types.GET_COURSE_ERR:
    notification.error({
      message: ERROR_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading : false,
      message: action.message
    };
  default:
    return state;
  }
}