import React from 'react';
import { render } from '@testing-library/react';
import I18nProvider from '../../../i18n';

/**
 * Under test
 */
import HomePage from '../HomePage';

jest.mock('../../../components/LoginStatus', () => 'div');

type Props = React.ComponentProps<typeof HomePage>;

const createElement = (props?: Partial<Props>) => (
  <I18nProvider>
    <HomePage {...props} />
  </I18nProvider>
);

test('renders learn react link', () => {
  const { getByText } = render(createElement());
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
