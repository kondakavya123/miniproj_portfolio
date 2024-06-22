// src/redux/reducers/eval_script1.js

import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "../types";

// import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/eval_script';

const initialState = {
  programme: '',
  semester: '',
  course: [],
  regNo: '',
  data: null,
  error: null,
};

const evalScriptReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_DATA_SUCCESS:
    return {
      ...state,
      data: action.payload,
      error: null,
    };
  case FETCH_DATA_FAILURE:
    return {
      ...state,
      data: null,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default evalScriptReducer;
