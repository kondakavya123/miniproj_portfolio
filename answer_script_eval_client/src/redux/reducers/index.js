import { combineReducers } from 'redux';

import studentReducer from './studentform';
import coordinator from './eval_script';
import programme from './programme';
import course from './Course';
import faculty from './Faculty';
import student from './Student';
import scheduleexam from './ScheduleExam';
import auth from './auth';
import initeval1Reducer from './initeval1';
import coordinatorReducer from './coordinatorReducer';

const rootReducer = combineReducers({
  programme: programme,
  course: course,
  faculty: faculty,
  student: student,
  scheduleexam: scheduleexam, 
  auth: auth,
  initeval1Reducer: initeval1Reducer,
  coordinator: coordinator,
  studentReducer: studentReducer,
  coordinatorReducer: coordinatorReducer,
});

export default rootReducer;

