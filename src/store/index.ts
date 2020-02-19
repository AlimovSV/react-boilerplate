// https://redux.js.org/recipes/usage-with-typescript/#usage-with-typescript
// https://dev.to/leomeloxp/taking-react-and-redux-to-the-next-level-with-typescript-1m84

import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import { createLogger } from 'redux-logger';

import { systemReducer } from './system/reducers';

const rootReducer = combineReducers({
  system: systemReducer,
});

const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    // https://github.com/LogRocket/redux-logger#options
  });

  middlewares.push(logger);
}

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(...middlewares));
}
