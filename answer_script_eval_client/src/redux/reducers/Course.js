import { notification } from 'antd';
import * as type from '../types';
import { ERROR_APP_HEADING } from '../../Constants';
const initialstate={
  isLoading:false,
  courses: [],
};


export default function course(state=initialstate,action){
  switch(action.type){
  case type.FETCH_COURSE:
    return{
      ...state,
      isLoading:true
    };
  case type.FETCH_COURSE_SUCC:
    return{
      ...state,
      isLoading:false,
      courses: action.data,
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
  default:
    return state;
  }
}