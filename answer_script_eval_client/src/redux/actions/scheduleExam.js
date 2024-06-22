import { FETCH_PROGRAM, FETCH_SCHEDULE_EXAM, SAVE_SCHEDULE_EXAM_REQ } from '../types';
import { FETCH_COURSE } from '../types';
import { FETCH_FACULTY } from '../types';
import { FETCH_STUDENTS } from '../types';

export function getAllProgramme(){  
  return {
    type: FETCH_PROGRAM,
  };

}

export function getAllFaculty(){  
  return {
    type: FETCH_FACULTY,
  };

}

export function getAllCourse(){  
  return {
    type: FETCH_COURSE,
  };
}


export function getAllStudents(){  
  return {
    type: FETCH_STUDENTS,
  };
}

export function scheduleExam(formData) {  
  return {
    type: FETCH_SCHEDULE_EXAM,
    payload: formData,
  };
}

export function saveScheduleExam(data) {  
  return {
    type: SAVE_SCHEDULE_EXAM_REQ,
    payload: data,
  };
}
  