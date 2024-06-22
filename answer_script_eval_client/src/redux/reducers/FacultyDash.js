// facultyDash/reducers.js

import { HANDLE_DROPDOWN_ACTION } from './actions';

const initialState = {
  selectedOption: null,
  selectedRecord: null,
  // Add any other initial state properties here
  additionalProperty: 'defaultValue',
};

const facultyDashReducer = (state = initialState, action) => {
  switch (action.type) {
  case HANDLE_DROPDOWN_ACTION:
    // Handle the state update based on the dropdown action
    return {
      ...state,
      selectedOption: action.payload.selectedOption,
      selectedRecord: action.payload.record,
      additionalProperty: 'new value',
    };

  default:
    return state;
  }
};

export default facultyDashReducer;
