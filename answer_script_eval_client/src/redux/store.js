// import { createStore, compose, applyMiddleware } from 'redux';
// import rootReducer from './reducers/index.js';

// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas/index';

// const sagaMiddleWare = createSagaMiddleware();
// const store = compose(
//   applyMiddleware(sagaMiddleWare),
//   // window.devToolsExtension && window.devToolsExtension(),
//   window.REDUX_DEVTOOLS_EXTENSION
//     ? window.REDUX_DEVTOOLS_EXTENSION()
//     : f => f
// )(createStore)(rootReducer);

// sagaMiddleWare.run(rootSaga);

// export default store;

// store.js

// store.js
// store.js
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

import * as types from './types'; // Import action types

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store; // Use 'export default' for the store
export { types };