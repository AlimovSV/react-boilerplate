import IUsersAPI from './users/IUsersAPI';

let UsersAPI;

if (process.env.NODE_ENV === 'production' || process.env.REACT_APP_ENV) {
  // Use a real API version to call web API
  ({ default: UsersAPI } = require('./users/UsersAPI'));
} else {
  // Use a mocked API version to run without any backend
  ({ default: UsersAPI } = require('./users/__mocks__/UsersAPI'));
}

const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const usersAPI: IUsersAPI = new UsersAPI(baseUrl);
