import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';

import { createBrowserHistory } from 'history';
import { persistStore } from 'redux-persist';

import I18nProvider from './i18n';
import Routes from './routes';
import configureStore from './store';

const history = createBrowserHistory();
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistStore(store as any)}>
      <Router history={history}>
        <I18nProvider>
          <Routes />
        </I18nProvider>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
