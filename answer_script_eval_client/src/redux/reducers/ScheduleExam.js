import { notification } from 'antd';
import * as type from '../types';
import { ERROR_APP_HEADING, SUCCES_APP_HEADING } from '../../constants/constants';

const initialState = {
  isLoading: false,
  scheduleData: null, // Add this property to store the schedule exam data
};

export default function scheduleexam(state = initialState, action) {
  switch (action.type) {
  case type.SAVE_SCHEDULE_EXAM_REQ:
    return {
      ...state,
      isLoading: true,
    };
  case type.SAVE_SCHEDULE_EXAM_SUCC:
    notification.success({
      message: SUCCES_APP_HEADING,
      description: action.message,
    });
    return {
      ...state,
      isLoading: false,
      scheduleData: action.data,
    };
  case type.SAVE_SCHEDULE_EXAM_ERR:
    notification.error({
      message: ERROR_APP_HEADING,
      description: action.message,
    });
    return {
      ...state,
      isLoading: false,
    };
  default:
    return state;
  }
}
