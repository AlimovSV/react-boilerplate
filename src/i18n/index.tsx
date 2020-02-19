import React from 'react';
import { IntlProvider, IntlConfig } from 'react-intl';

const formats = {
  number: {
    percent: {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    USD: {
      style: 'currency',
      currency: 'USD',
    },
  },
  date: {
    short: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
    long: {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    },
  },
};

const messages = {};

const I18nProvider: React.FC<Partial<IntlConfig>> = props => (
  <IntlProvider
    {...props}
    locale="en"
    defaultFormats={formats}
    formats={formats}
    messages={messages}
  />
);

export default I18nProvider;
