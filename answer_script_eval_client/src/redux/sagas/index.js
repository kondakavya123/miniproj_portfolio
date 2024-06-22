import { all } from 'redux-saga/effects';
import { getCourseSaga } from './eval_script';
import { fetchProgramWatcher } from './Program';
import { fetchCourseWatcher } from './Course';
import { fetchFacultyWatcher } from './faculty';
import { fetchStudentsWatcher, saveAnswerScriptAndQuestionsSaga } from './Student';
import { watchScheduleExam } from './ScheduleExam'; 
import { getCurrentUserSaga, userLoginSaga, userLogoutSaga } from './auth';
import { getAllProgrammesSage, getCourseByProgIdAndSemSaga } from './initeval1';
import { evaluateSaga, extractSaga, getScheduledExamSaga, getStudentAnsScriptByProgSemCourseSaga, saveCommentsSaga, verifyStudentMarksSaga } from './coordinatorSaga';

export default function* rootSaga() {
  yield all([
    // testData(),
    fetchProgramWatcher(),
    fetchCourseWatcher(),
    fetchFacultyWatcher(),
    fetchStudentsWatcher(),
    watchScheduleExam(),
    getCurrentUserSaga(),
    userLogoutSaga(),
    userLoginSaga(),
    getCourseByProgIdAndSemSaga(),
    getAllProgrammesSage(),
    getCourseSaga(),
    getScheduledExamSaga(),
    saveAnswerScriptAndQuestionsSaga(),
    getStudentAnsScriptByProgSemCourseSaga(),
    verifyStudentMarksSaga(),
    saveCommentsSaga(),
    extractSaga(),
    evaluateSaga(),
  ]);
}
