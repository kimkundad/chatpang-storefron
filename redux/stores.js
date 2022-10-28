import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import storageSession from 'redux-persist/lib/storage/session';

import rootReducers, { allInitialState, allStore } from './reducers';
import rootSaga from './saga';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  if (process.env.NODE_ENV !== 'development') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return composeWithDevTools(applyMiddleware(...middleware));
};

const loadState = () => {
  try {
    const state = sessionStorage.getItem('redux-store');
    if (state === null) {
      return {};
    }

    return JSON.parse(state);
  } catch (err) {
    return {};
  }
};

const sagaMiddleware = createSagaMiddleware();

const persistState = loadState();

export const store = createStore(rootReducers, persistState, bindMiddleware([sagaMiddleware]));
store.subscribe(() => {
  try {
    if (window !== undefined) window.sessionStorage.setItem('redux-store', JSON.stringify(store.getState()));
  } catch (error) {
    console.log(error.message);
  }
});

store.sagaTask = sagaMiddleware.run(rootSaga);

export const makeStore = () => {
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
