import deepmerge from 'deepmerge';

import * as config from './config';

let environment: Partial<typeof config>;

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  environment = require('./development');
} else if (process.env.REACT_APP_ENV === 'staging') {
  environment = require('./staging');
} else {
  environment = require('./production');
}

export default deepmerge(config, environment, {
  arrayMerge: (_destinationArray, sourceArray, _options) => sourceArray,
});
