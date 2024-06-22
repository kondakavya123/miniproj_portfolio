// uploadapiActions.js
export const uploadFolderRequest = (data) => ({
  type: 'UPLOAD_FOLDER_REQUEST',
  payload: data,
});
  
export const uploadFolderSuccess = () => ({
  type: 'UPLOAD_FOLDER_SUCCESS',
});
  
export const uploadFolderFailure = (error) => ({
  type: 'UPLOAD_FOLDER_FAILURE',
  payload: error,
});
  