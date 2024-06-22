import * as types from '../types';

const initialState = {
  isLoading: false,
  testData: '',
};

export default function testReducerData(state = initialState, action) {
  switch (action.type) {
  case types.GET_TEST:
    return {
      ...state,
      isLoading: true,
    };
  case types.GET_TEST_SUCCESS:
    return {
      ...state,
      isLoading: false,
      testData: action.message,
    };
  case types.GET_TEST_ERROR:
    return {
      ...state,
      isLoading: false,
      message: action.message,
    };
  default:
    return state;
  }
}
