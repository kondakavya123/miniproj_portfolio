import { EVALUATE_REQ, EXTRACT_REQ, GET_SCHEDULED_EXAM_REQ, GET_STUD_ANS_SCRIPT_BY_PROG_SEM_COURSE_REQ, SAVE_COMMENT_REQ, VERIFY_REQ } from "../types";

// coordinatorActions.js
export const SET_PROGRAMME = 'SET_PROGRAMME';
export const SET_SEMESTER = 'SET_SEMESTER';

export const setProgramme = (programme) => ({
  type: SET_PROGRAMME,
  payload: programme,
});

export const setSemester = (semester) => ({
  type: SET_SEMESTER,
  payload: semester,
});

export function getScheduledExam(selectedProgrammeId, selectedSemester) {
  return {
    type: GET_SCHEDULED_EXAM_REQ,
    payload: {selectedProgrammeId, selectedSemester},
  };
}

export function getStudentAnsScriptByProgSemCourse(values) {
  return {
    type: GET_STUD_ANS_SCRIPT_BY_PROG_SEM_COURSE_REQ,
    payload: values,
  };
}

export function verifyStudentMarks(id) {
  return {
    type: VERIFY_REQ,
    payload: id,
  };
}

export function saveComments(comment, studentAnsScriptId) {
  return {
    type: SAVE_COMMENT_REQ,
    payload: { comment, studentAnsScriptId },
  };
}

export function extract(studentAnsScriptId) {
  return {
    type: EXTRACT_REQ,
    payload: studentAnsScriptId,
  };
}

export function evaluate(studentAnsScriptId) {
  return {
    type: EVALUATE_REQ,
    payload: studentAnsScriptId,
  };
}

