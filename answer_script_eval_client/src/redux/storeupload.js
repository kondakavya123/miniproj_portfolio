// uploadapiStore.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import uploadReducer from '../reducers/uploadapi';
import { watchUploadFolder } from './uploadapi';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(uploadReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUploadFolder);

export default store;
