import { notification } from 'antd';
import * as type from '../types';
import { ERROR_APP_HEADING } from '../../Constants';
const initialstate={
  isLoading:false,
  faculties: [],
};


export default function faculty(state=initialstate,action){
  switch(action.type){
  case type.FETCH_FACULTY:
    return{
      ...state,
      isLoading:true
    };
  case type.FETCH_FACULTY_SUCC:
    return{
      ...state,
      isLoading:false,
      faculties: action.data,
    };
  case type.FETCH_FACULTY_ERR:
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