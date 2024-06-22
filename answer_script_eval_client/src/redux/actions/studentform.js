// actions.js
import { SAVE_Q_ANS_SCRIPT_REQ, VIEW_ANSWER_SCRIPT } from '../types';

export const viewAnswerScript = (studentName) => ({
  type: VIEW_ANSWER_SCRIPT,
  payload: { studentName },
});

export function saveAnswerScriptAndQuestions(values) {
  return {
    type: SAVE_Q_ANS_SCRIPT_REQ,
    payload: values
  };
}