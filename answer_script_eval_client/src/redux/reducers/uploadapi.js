// uploadapiReducers.js
const initialState = {
  uploading: false,
  error: null,
};
  
const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPLOAD_FOLDER_REQUEST':
    return {
      ...state,
      uploading: true,
      error: null,
    };
  
  case 'UPLOAD_FOLDER_SUCCESS':
    return {
      ...state,
      uploading: false,
      error: null,
    };
  
  case 'UPLOAD_FOLDER_FAILURE':
    return {
      ...state,
      uploading: false,
      error: action.payload,
    };
  
  default:
    return state;
  }
};
  
export default uploadReducer;
  