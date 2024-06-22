// facultyDash/sagas.js

import { takeLatest, put } from 'redux-saga/effects';
import { HANDLE_DROPDOWN_ACTION, handleDropdownSuccess, handleDropdownError } from './actions';

// Worker Saga: This will be called on HANDLE_DROPDOWN_ACTION
function* handleDropdown(action) {
  try {
    // You can perform asynchronous operations here if needed

    // Dispatch a success action with the payload
    yield put(handleDropdownSuccess(action.payload));
  } catch (error) {
    // Dispatch an error action if something goes wrong
    yield put(handleDropdownError(error));
  }
}

// Watcher Saga: Watches for HANDLE_DROPDOWN_ACTION and invokes the worker saga
function* watchHandleDropdown() {
  yield takeLatest(HANDLE_DROPDOWN_ACTION, handleDropdown);
}

// Combine all sagas into a single root saga
export default function* rootSaga() {
  yield [
    // Add other watcher sagas as needed
    watchHandleDropdown(),
  ];
}
