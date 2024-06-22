
import { FETCH_COURSES_FAILURE, FETCH_COURSES_SUCCESS, GET_COURSE_BY_PROG_SEM_ERR, GET_COURSE_BY_PROG_SEM_REQ, GET_COURSE_BY_PROG_SEM_SUCC, GET_PROGRAMMES_ERR, GET_PROGRAMMES_REQ, GET_PROGRAMMES_SUCC, GET_TEST, GET_TEST_ERROR, GET_TEST_SUCCESS, SET_SELECTED_PROGRAM, SET_SELECTED_SEMESTER } from '../types';
import { ERROR_APP_HEADING } from '../../constants/constants';
import { notification } from 'antd';
  
const initialState = {
  selectedProgram: null,
  selectedSemester: null,
  courses: [],
  error: null,
  testData: null,
  testError: null,
  programmes: [],
  courseByProgSem: [],
};
  
export default function initeval1Reducer(state = initialState, action) {
  switch (action.type) {
        
  case GET_PROGRAMMES_REQ:
    return {
      ...state,
      isLoading: true,
    };
  case GET_PROGRAMMES_SUCC:
    return{
      ...state,
      programmes: action.data,
      isLoading: false,
    };
  case GET_PROGRAMMES_ERR:
    notification.error({
      message: ERROR_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading : false,
      message: action.message
    };

  
  case GET_COURSE_BY_PROG_SEM_REQ:
    return {
      ...state,
      isLoading: true,
    };
  case GET_COURSE_BY_PROG_SEM_SUCC:
    return{
      ...state,
      courseByProgSem: action.data,
      isLoading: false,
    };
  case GET_COURSE_BY_PROG_SEM_ERR:
    notification.error({
      message: ERROR_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading : false,
      message: action.message
    };
  
  case SET_SELECTED_PROGRAM:
    return {
      ...state,
      selectedProgram: action.payload,
    };
  case SET_SELECTED_SEMESTER:
    return {
      ...state,
      selectedSemester: action.payload,
    };
  case FETCH_COURSES_SUCCESS:
    return {
      ...state,
      courses: action.payload,
      error: null,
    };
  case FETCH_COURSES_FAILURE:
    return {
      ...state,
      error: action.payload,
    };
  case GET_TEST:
    return {
      ...state,
      testData: null,
      testError: null,
    };
  case GET_TEST_SUCCESS:
    return {
      ...state,
      testData: action.payload,
      testError: null,
    };
  case GET_TEST_ERROR:
    return {
      ...state,
      testData: null,
      testError: action.payload,
    };
  default:
    return state;
  }
}
    
    