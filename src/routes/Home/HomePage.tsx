import React from 'react';
import { FormattedMessage, FormattedDate, FormattedNumber, defineMessages } from 'react-intl';
import logo from './logo.svg';
import './HomePage.css';

const HomePage = () => (
  <div className="Home">
    <header className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
      <p>
        <FormattedMessage {...messages.text} values={{ link: <code>src/Home.tsx</code> }} />
        <br />
        <FormattedDate value={Date.now()} format="long" />
        <br />
        <FormattedNumber value={123} format="USD" />
      </p>
      <a className="Home-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <FormattedMessage {...messages.link} />
      </a>
    </header>
  </div>
);

const messages = defineMessages({
  text: {
    id: 'Home/text',
    defaultMessage: 'Edit {link} and save to reload.',
  },
  link: {
    id: 'Home/link',
    defaultMessage: 'Learn React',
  },
});

export default HomePage;
