// facultyDash/actions.js

// Action Types
export const HANDLE_DROPDOWN_ACTION = 'HANDLE_DROPDOWN_ACTION';

// Action Creators
export const handleDropdownAction = (selectedOption, record) => {
  return {
    type: HANDLE_DROPDOWN_ACTION,
    payload: {
      selectedOption,
      record,
    },
  };
};
