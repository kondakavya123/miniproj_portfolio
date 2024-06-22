// answer_script_eval_client\answer_script_eval_client\src\redux\actions\uploadscripts.js

export const ADD_QUESTION = 'ADD_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const SUBMIT_FORM_REQUEST = 'SUBMIT_FORM_REQUEST';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
export const SUBMIT_FORM_FAILURE = 'SUBMIT_FORM_FAILURE';
export const CANCEL_FORM = 'CANCEL_FORM';

export const addQuestion = () => ({ type: ADD_QUESTION });
export const removeQuestion = (id) => ({ type: REMOVE_QUESTION, payload: id });
export const submitFormRequest = (formData) => ({ type: SUBMIT_FORM_REQUEST, payload: formData });
export const submitFormSuccess = () => ({ type: SUBMIT_FORM_SUCCESS });
export const submitFormFailure = (error) => ({ type: SUBMIT_FORM_FAILURE, payload: error });
export const cancelForm = () => ({ type: CANCEL_FORM });
