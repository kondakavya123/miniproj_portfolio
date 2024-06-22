import { notification } from "antd";
import { ERROR_APP_HEADING, SUCCES_APP_HEADING } from "../../constants/constants";
import * as types from "../types";

const initialState = {
  isLoading: false,
  scheduledExamsAndStudents: [],
  studentsAnsScript: [],
};

const coordinatorReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.GET_SCHEDULED_EXAM_REQ:
    return {
      ...state,
      isLoading: true,
    };
  case types.GET_SCHEDULED_EXAM_SUCC:
    return{
      ...state,
      scheduledExamsAndStudents: action.data,
      isLoading: false,
    };
  case types.GET_SCHEDULED_EXAM_ERR:
    notification.error({
      message: ERROR_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading : false,
      message: action.message
    };
    
  case types.GET_STUD_ANS_SCRIPT_BY_PROG_SEM_COURSE_REQ:
    return {
      ...state,
      isLoading: true,
    };
  case types.GET_STUD_ANS_SCRIPT_BY_PROG_SEM_COURSE_SUCC:
    return{
      ...state,
      studentsAnsScript: action.data,
      isLoading: false,
    };
  case types.GET_STUD_ANS_SCRIPT_BY_PROG_SEM_COURSE_ERR:
    notification.error({
      message: ERROR_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading : false,
      message: action.message
    };

  case types.VERIFY_REQ:
    return {
      ...state,
      isLoading: true,
    };
  case types.VERIFY_SUCC:
    notification.success({
      message: SUCCES_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading: false,
    };
  case types.VERIFY_ERR:
    notification.error({
      message: ERROR_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading : false,
      message: action.message
    };

  case types.SAVE_COMMENT_REQ:
    return {
      ...state,
      isLoading: true,
    };
  case types.SAVE_COMMENT_SUCC:
    notification.success({
      message: SUCCES_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading: false,
    };
  case types.SAVE_COMMENT_ERR:
    notification.error({
      message: ERROR_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading : false,
      message: action.message
    };

  case types.EVALUATE_REQ:
    return {
      ...state,
      isLoading: true,
    };
  case types.EVALUATE_SUCC:
    notification.success({
      message: SUCCES_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading: false,
    };
  case types.EVALUATE_ERR:
    notification.error({
      message: ERROR_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading : false,
      message: action.message
    };

  case types.EXTRACT_REQ:
    return {
      ...state,
      isLoading: true,
    };
  case types.EXTRACT_SUCC:
    notification.success({
      message: SUCCES_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading: false,
    };
  case types.EXTRACT_ERR:
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
};

export default coordinatorReducer;