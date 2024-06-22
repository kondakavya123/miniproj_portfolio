// answer_script_eval_client\answer_script_eval_client\src\redux\reducers\upload1.js

import {
  ADD_QUESTION,
  REMOVE_QUESTION,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
} from '../actions/uploadscripts';

const initialState = {
  questions: [{ id: 1 }],
  submitting: false,
  submitError: null,
};

const upload1Reducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_QUESTION:
    return {
      ...state,
      questions: [...state.questions, { id: state.questions.length + 1 }],
    };
  case REMOVE_QUESTION:
    return {
      ...state,
      questions: state.questions.filter((q) => q.id !== action.payload),
    };
  case SUBMIT_FORM_SUCCESS:
    return {
      ...state,
      submitting: false,
      submitError: null,
    };
  case SUBMIT_FORM_FAILURE:
    return {
      ...state,
      submitting: false,
      submitError: action.payload,
    };
    // Add more cases if needed for other actions
  default:
    return state;
  }
};

export default upload1Reducer;
