// reducers.js
import { VIEW_ANSWER_SCRIPT } from '../types';

const initialState = {
  // Define your initial state if needed
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
  case VIEW_ANSWER_SCRIPT:
    // Handle the action and update the state accordingly
    return {
      ...state,
      // You can update the state based on the action payload
    };
  default:
    return state;
  }
};

export default studentReducer;