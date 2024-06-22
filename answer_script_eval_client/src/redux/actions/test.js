import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA as FETCH_DATA_CONSTANT, GET_TEST, GET_COURSE_REQ } from '../types';

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchDataAction = () => ({
  type: FETCH_DATA_CONSTANT,
});

export function getTestData(){  
  return {
    type: GET_TEST, //action object
  };
  
}
export const fetchProgramSuccess = () => ({
  
});

export const fetchCourseSuccess = () => ({
  
});

export const fetchFacultySuccess = () => ({
 
});


export function getAllCourses(){    
  return {
    type: GET_COURSE_REQ
  };
}

