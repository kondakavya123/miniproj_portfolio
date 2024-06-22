
import {
  FETCH_STUDENT_DATA_SUCCESS,
  FETCH_STUDENT_DATA_ERROR,
  EXTRACT_PDF_SUCCESS,
  EXTRACT_PDF_ERROR,
  EVALUATE_ANSWER_SCRIPT_SUCCESS,
  EVALUATE_ANSWER_SCRIPT_ERROR,
} from '../types';

const initialState = {
  students: [],
  
};

const initeval2Reducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_STUDENT_DATA_SUCCESS:
    return {
      ...state,
      students: action.payload.students,
    };

  case FETCH_STUDENT_DATA_ERROR:
      
    return state;

  case EXTRACT_PDF_SUCCESS:
      
    return {
      ...state,
        
    };

  case EXTRACT_PDF_ERROR:
      
    return state;

  case EVALUATE_ANSWER_SCRIPT_SUCCESS:
      
    return {
      ...state,
        
    };

  case EVALUATE_ANSWER_SCRIPT_ERROR:
      
    return state;

    

  default:
    return state;
  }
};

export default initeval2Reducer;
