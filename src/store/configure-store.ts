import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';

import {rootReducer, RootState} from './root-reducer';
import {rootSaga} from './root-saga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the redux store
export const store = createStore<RootState, any, any, any>(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// Run our saga (async actions middleware)
sagaMiddleware.run(rootSaga);

// Create the persist store
export const persistor = persistStore(store);
