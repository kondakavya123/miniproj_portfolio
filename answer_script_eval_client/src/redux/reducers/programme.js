import { notification } from 'antd';
import * as type from '../types';
import { ERROR_APP_HEADING } from '../../Constants';
const initialstate={
  isLoading:false,
  programmes: [],
};


export default function programme(state=initialstate,action){
  switch(action.type){
  case type.FETCH_PROGRAM:
    return{
      ...state,
      isLoading:true
    };
  case type.FETCH_PROGRAM_SUCC:
    return{
      ...state,
      isLoading:false,
      programmes: action.data,
    };
  case type.FETCH_PROGRAM_ERR:
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