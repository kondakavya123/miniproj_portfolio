import {
  FETCH_STUDENT_DATA,
  FETCH_STUDENT_DATA_SUCCESS,
  FETCH_STUDENT_DATA_ERROR,
  EXTRACT_PDF,
  EXTRACT_PDF_SUCCESS,
  EXTRACT_PDF_ERROR,
  EVALUATE_ANSWER_SCRIPT,
  EVALUATE_ANSWER_SCRIPT_SUCCESS,
  EVALUATE_ANSWER_SCRIPT_ERROR,
} from '../types';

export const fetchStudentDataAction = () => ({
  type: FETCH_STUDENT_DATA,
});

export const fetchStudentDataSuccessAction = (students) => ({
  type: FETCH_STUDENT_DATA_SUCCESS,
  payload: { students },
});

export const fetchStudentDataErrorAction = (error) => ({
  type: FETCH_STUDENT_DATA_ERROR,
  payload: { error },
});

export const extractPdfAction = (regNo, pdfFileName) => ({
  type: EXTRACT_PDF,
  payload: { regNo, pdfFileName },
});

export const extractPdfSuccessAction = (regNo, pdfText) => ({
  type: EXTRACT_PDF_SUCCESS,
  payload: { regNo, pdfText },
});

export const extractPdfErrorAction = (error) => ({
  type: EXTRACT_PDF_ERROR,
  payload: { error },
});

export const evaluateAnswerScriptAction = (regNo, pdfText) => ({
  type: EVALUATE_ANSWER_SCRIPT,
  payload: { regNo, pdfText },
});

export const evaluateAnswerScriptSuccessAction = (regNo, result) => ({
  type: EVALUATE_ANSWER_SCRIPT_SUCCESS,
  payload: { regNo, result },
});

export const evaluateAnswerScriptErrorAction = (error) => ({
  type: EVALUATE_ANSWER_SCRIPT_ERROR,
  payload: { error },
});
