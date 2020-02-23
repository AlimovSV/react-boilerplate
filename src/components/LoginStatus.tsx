// https://react-redux.js.org/using-react-redux/static-typing#inferring-the-connected-props-automatically

import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import { ConnectedProps, connect } from 'react-redux';

import { RootState } from '../store';
import { updateSession } from '../store/system/actions';
import styles from '../styles/global.module.scss';

const mapState = ({ system: { loggedIn, userName } }: RootState) => ({
  loggedIn,
  userName,
});

const mapDispatch = {
  login: () => updateSession({ loggedIn: true, session: '#', userName: 'John Smith' }),
  logout: () => updateSession({ loggedIn: false, session: '', userName: '' }),
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector> & {
  fontSize?: string | number;
};

export const LoginStatus: React.FC<Props> = ({ loggedIn, userName, fontSize, login, logout }) => (
  <section style={{ fontSize }}>
    {loggedIn ? (
      <>
        <FormattedMessage {...messages.logout} values={{ name: userName }} />
        &nbsp;|&nbsp;
        <button className={styles.button} onClick={logout}>
          <FormattedMessage {...messages.logoutButton} />
        </button>
      </>
    ) : (
      <>
        <FormattedMessage {...messages.login} />
        &nbsp;|&nbsp;
        <button className={styles.button} onClick={login}>
          <FormattedMessage {...messages.loginButton} />
        </button>
      </>
    )}
  </section>
);

const messages = defineMessages({
  logout: {
    id: 'components/LoginStatus/logout',
    defaultMessage: 'Logged in as {name}',
  },
  login: {
    id: 'components/LoginStatus/login',
    defaultMessage: 'Click to log in',
  },
  loginButton: {
    id: 'components/LoginStatus/loginButton',
    defaultMessage: 'Login',
  },
  logoutButton: {
    id: 'components/LoginStatus/logoutButton',
    defaultMessage: 'Logout',
  },
});

export default connector(LoginStatus);
