/*import * as type from '../types';
const initialstate={
  isLoading:false,
  testData:'',
};


export default function testReducerData(state=initialstate,action){
  switch(action.type){
  case type.GET_TEST:
    return{
      ...state,
      isLoading:true
    };
  case type.GET_TEST_SUCCESS:
    return{
      ...state,
      isLoading:false,
      testData:action.message
    };
  case type.GET_TEST_ERROR:
    return{
      ...state,
      isLoading:false,
      message:action.message
    };
  default:
    return state;
  }
}*/
