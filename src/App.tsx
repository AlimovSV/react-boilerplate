import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import I18nProvider from './i18n';
import Routes from './routes';
import configureStore from './store';

const history = createBrowserHistory();
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <I18nProvider>
        <Routes />
      </I18nProvider>
    </Router>
  </Provider>
);

export default App;
