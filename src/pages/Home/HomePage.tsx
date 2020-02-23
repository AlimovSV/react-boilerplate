import React from 'react';
import { FormattedMessage, FormattedDate, FormattedNumber, defineMessages } from 'react-intl';

import LoginStatus from '../../components/LoginStatus';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import styles from './HomePage.module.scss';

const HomePage = () => (
  <main className={styles.container}>
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <div>
        <p>
          <FormattedMessage {...messages.text} />
        </p>
        <p>
          <FormattedMessage
            {...messages.date}
            values={{ date: <FormattedDate value={Date.now()} format="long" /> }}
          />
          <br />
          <FormattedMessage
            {...messages.currency}
            values={{ currency: <FormattedNumber value={123.45} format="USD" /> }}
          />
        </p>
      </div>
      <LoginStatus fontSize={20} />
      <p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage {...messages.link} />
        </a>
      </p>
    </header>
  </main>
);

const messages = defineMessages({
  text: {
    id: 'pages/Home/HomePage/text',
    defaultMessage: 'Welcome to React boilerplate!',
  },
  date: {
    id: 'pages/Home/HomePage/date',
    defaultMessage: 'Date formatting: {date}',
  },
  currency: {
    id: 'pages/Home/HomePage/currency',
    defaultMessage: 'Currency formatting: {currency}',
  },
  link: {
    id: 'pages/Home/HomePage/link',
    defaultMessage: 'Learn React',
  },
});

export default HomePage;
