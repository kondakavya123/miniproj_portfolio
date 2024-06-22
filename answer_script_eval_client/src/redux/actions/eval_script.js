// src/redux/actions/eval_script.js

import { FETCH_DATA_REQUEST } from "../types";

export function fetchDataRequest (){
  return {
    type: FETCH_DATA_REQUEST,
  };
}
