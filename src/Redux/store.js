import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './rootReducer';
import rootSaga from './saga';

const saga = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

  const store = createStore(reducers, composeEnhancers(applyMiddleware(...[saga])));

  saga.run(rootSaga);

  export default store;