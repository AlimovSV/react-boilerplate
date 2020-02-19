// https://redux.js.org/recipes/usage-with-typescript/#usage-with-typescript
// https://dev.to/leomeloxp/taking-react-and-redux-to-the-next-level-with-typescript-1m84

import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';

// https://redux-saga.js.org/docs/api/
import createSagaMiddleware from 'redux-saga';

import { systemReducer } from './system/reducers';

import rootSaga from '../sagas';

const rootReducer = combineReducers({
  system: systemReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    // https://github.com/LogRocket/redux-logger#options
  });

  middlewares.push(logger);
}

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  sagaMiddleware.run(rootSaga);

  return store;
}
