// uploadapiSagas.js
import { takeLatest, put, call } from 'redux-saga/effects';
import { uploadFolderSuccess, uploadFolderFailure } from '../actions/uploadapi';

const API_URL = 'YOUR_API_ENDPOINT'; 

function* uploadFolderSaga(action) {
  try {
    // Assuming your API expects a FormData object for handling file uploads
    const formData = new FormData();
    formData.append('folder', action.payload);

    // Make the API call
    const response = yield call(fetch, API_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    yield put(uploadFolderSuccess());
  } catch (error) {
    yield put(uploadFolderFailure(error.message));
  }
}

export function* watchUploadFolder() {
  yield takeLatest('UPLOAD_FOLDER_REQUEST', uploadFolderSaga);
}
