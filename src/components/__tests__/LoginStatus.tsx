import React from 'react';
import { render } from '@testing-library/react';
import I18nProvider from '../../i18n';

jest.doMock('redux', () => ({
  bindActionCreators: jest.fn(actionCreators => actionCreators),
}));

const connect = jest.fn(() => (Component: any) => Component);

jest.doMock('react-redux', () => ({
  connect,
}));

const updateSession = jest.fn();

jest.doMock('../../store/system/actions', () => ({
  updateSession,
}));

/**
 * Under test
 */
const { LoginStatus } = require('../LoginStatus');

type Props = React.ComponentProps<typeof LoginStatus>;

const createElement = (props: Partial<Props>) => (
  <I18nProvider>
    <LoginStatus loggedIn={true} login={jest.fn()} logout={jest.fn()} {...props} />
  </I18nProvider>
);

const renderElement = (props: Partial<Props>) => render(createElement(props));

it('should render as authenticated', () => {
  const logout = jest.fn();
  const { container, getByText } = renderElement({ logout });

  expect(container.firstChild).toMatchSnapshot();

  getByText('Logout').click();

  expect(logout).toBeCalled();
});

it('should render as anonymous', async () => {
  const login = jest.fn();
  const { container, getByText } = renderElement({ loggedIn: false, login });

  expect(container.firstChild).toMatchSnapshot();

  getByText('Login').click();

  expect(login).toBeCalled();
});

describe('redux', () => {
  it('should connect to redux', () => {
    expect(connect).toHaveBeenCalledTimes(1);
    expect(connect).toBeCalledWith(expect.any(Function), expect.any(Object));
  });

  it('should map state to props', () => {
    const [mapStateToProps] = connect.mock.calls[0] as any;

    expect(mapStateToProps({ system: { loggedIn: true } })).toEqual({ loggedIn: true });
  });

  it('should map dispatch to props', () => {
    const [, mapDispatch] = connect.mock.calls[0] as any;

    expect(mapDispatch).toEqual({
      login: expect.any(Function),
      logout: expect.any(Function),
    });

    mapDispatch.login();

    expect(updateSession).lastCalledWith({ loggedIn: true, session: '#', userName: 'John Smith' });

    mapDispatch.logout();

    expect(updateSession).lastCalledWith({ loggedIn: false, session: '', userName: '' });
  });
});
