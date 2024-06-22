import { notification } from 'antd';
import * as type from '../types';
import { ERROR_APP_HEADING } from '../../Constants';
import { SUCCES_APP_HEADING } from '../../constants/constants';
const initialstate={
  isLoading:false,
  students: [],
};


export default function student(state=initialstate,action){
  switch(action.type){
  case type.FETCH_STUDENTS:
    return{
      ...state,
      isLoading:true
    };
  case type.FETCH_STUDENTS_SUCC:
    return{
      ...state,
      isLoading:false,
      students: action.data,
    };
  case type.FETCH_COURSE_ERR:
    notification.error({
      message: ERROR_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading:false,
      message:action.message
    };

  case type.SAVE_Q_ANS_SCRIPT_REQ:
    return{
      ...state,
      isLoading:true
    };
  case type.SAVE_Q_ANS_SCRIPT_SUCC:
    notification.success({
      message: SUCCES_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading:false,
    };
  case type.SAVE_Q_ANS_SCRIPT_ERR:
    notification.error({
      message: ERROR_APP_HEADING,
      description: action.message,
    });
    return{
      ...state,
      isLoading:false,
      message:action.message
    };
  default:
    return state;
  }
}