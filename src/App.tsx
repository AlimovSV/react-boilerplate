import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import I18nProvider from './i18n';
import Routes from './routes';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <I18nProvider>
      <Routes />
    </I18nProvider>
  </Router>
);

export default App;
