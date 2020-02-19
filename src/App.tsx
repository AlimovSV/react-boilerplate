import React from 'react';
import { FormattedMessage, FormattedDate, FormattedNumber, defineMessages } from 'react-intl';
import logo from './logo.svg';
import './App.css';
import I18nProvider from './i18n';

const App = () => (
  <I18nProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FormattedMessage {...messages.text} values={{ link: <code>src/App.tsx</code> }} />
          <br />
          <FormattedDate value={Date.now()} format="long" />
          <br />
          <FormattedNumber value={123} format="USD" />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage {...messages.link} />
        </a>
      </header>
    </div>
  </I18nProvider>
);

const messages = defineMessages({
  text: {
    id: 'App/text',
    defaultMessage: 'Edit {link} and save to reload.',
  },
  link: {
    id: 'App/link',
    defaultMessage: 'Learn React',
  },
});

export default App;
