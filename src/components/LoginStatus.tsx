// https://react-redux.js.org/using-react-redux/static-typing#inferring-the-connected-props-automatically

import React from 'react';
import { ConnectedProps, connect } from 'react-redux';

import { RootState } from '../store';
import { updateSession } from '../store/system/actions';

const mapState = ({ system: { loggedIn } }: RootState) => ({
  loggedIn,
});

const mapDispatch = {
  login: () => updateSession({ loggedIn: true, session: '#', userName: 'John Smith' }),
  logout: () => updateSession({ loggedIn: false, session: '', userName: '' }),
};

const connector = connect(mapState, mapDispatch);

type Props = ConnectedProps<typeof connector> & {
  backgroundColor?: string;
};

export const LoginStatus: React.FC<Props> = props => (
  <div style={{ backgroundColor: props.backgroundColor }}>
    {props.loggedIn ? (
      <button onClick={props.logout}>Logout</button>
    ) : (
      <button onClick={props.login}>Login</button>
    )}
  </div>
);

export default connector(LoginStatus);
