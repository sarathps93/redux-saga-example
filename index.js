import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import fetchEvery from './src/redux/reducers/fetchEvery';
import fetchLatest from './src/redux/reducers/fetchLatest';
import rootSaga from './src/redux/sagas/root-saga';
import App from './src/components/App';

const rootReducer = combineReducers({ every: fetchEvery, latest: fetchLatest });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const saga = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)));

saga.run(rootSaga, store.dispatch, store.getState);

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root')
)