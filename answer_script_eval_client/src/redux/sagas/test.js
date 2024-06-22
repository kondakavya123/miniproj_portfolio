import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types';

function getTestApi(){
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/health`)
    .then((res)=>{
      return Promise.resolve(res.data);
    })
    .catch((error)=>{
      return Promise.reject(error.message);
    });
}




// //import { FETCH_DATA } from '/src/redux/types';


// // import {
// //   fetchProgram,
// //   fetchCourse,
// //   fetchFaculty,
// //   fetchRegularStudents,
// //   fetchSupplyStudents,
// // } from './sagas';

// // describe('sagas', () => {
// //   it('should fetch programs', () => {
// //     const gen = fetchProgram();
// //     expect(gen.next().value).toEqual(call(fetchProgram));
// //   });

// //   it('should fetch Courses', () => {
// //     const gen = fetchCourse();
// //     expect(gen.next().value).toEqual(call(fetchCourse));
// //   });

// //   it('should fetch Faculties', () => {
// //     const gen = fetchFaculty();
// //     expect(gen.next().value).toEqual(call(fetchFaculty));
// //   });

// //   it('should fetch Regular Students', () => {
// //     const gen = fetchRegularStudents();
// //     expect(gen.next().value).toEqual(call(fetchRegularStudents));
// //   });

// //   it('should fetch Supply Students', () => {
// //     const gen = fetchSupplyStudents();
// //     expect(gen.next().value).toEqual(call(fetchSupplyStudents));
// //   });
// // });




function* testDataFun(){
  try{
    const res= yield call (getTestApi);
    if(res){
      yield put({
        type:types.GET_TEST_SUCCESS,
        message: res
      });
    }
    else{
      yield put({
        type:types.GET_TEST_ERROR,
        message:'error in api call'
      });
    }
  }
  catch(e){
    yield put({
      type:types.GET_TEST_ERROR,
      message:'exception in api call'
    });
  }
}
export function* testData(){
  yield takeEvery(types.GET_TEST, testDataFun);
}


