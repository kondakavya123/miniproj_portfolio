import { FETCH_COURSES_FAILURE, FETCH_COURSES_REQUEST, FETCH_COURSES_SUCCESS, GET_COURSE_BY_PROG_SEM_REQ, GET_PROGRAMMES_REQ, GET_TEST, GET_TEST_ERROR, GET_TEST_SUCCESS, SET_SELECTED_PROGRAM, SET_SELECTED_SEMESTER } from "../types";

export const setSelectedProgram = (program) => ({
  type: SET_SELECTED_PROGRAM,
  payload: program,
});

export const setSelectedSemester = (semester) => ({
  type: SET_SELECTED_SEMESTER,
  payload: semester,
});

export const fetchCoursesRequest = (payload) => ({
  type: FETCH_COURSES_REQUEST,
  payload,
});

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: error,
});

export const getTest = () => ({
  type: GET_TEST,
});

export const getTestSuccess = (data) => ({
  type: GET_TEST_SUCCESS,
  payload: data,
});

export const getTestError = (error) => ({
  type: GET_TEST_ERROR,
  payload: error,
});


export function getAllProgrammes() {
  return {
    type: GET_PROGRAMMES_REQ
  };
}

export function getCourseByProgIdAndSem(selectedProgrammetId, selectedSemester) {
  return {  
    type: GET_COURSE_BY_PROG_SEM_REQ,
    payload: {selectedProgrammetId, selectedSemester},
  };
}
