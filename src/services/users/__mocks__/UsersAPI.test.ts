import db from '../../../fixtures';

import { APIError } from '../../../errors';

/**
 * Under test
 */
const { default: UsersAPI } = require('./UsersAPI');

const user = db.users.JohnJohnson;

beforeEach(() => {
  db.users.clear();
  db.users.insert({ ...user });
});

const api = new UsersAPI('https://localhost:4000/api');

describe('listUsers', () => {
  it('should resolves with users', async () => {
    await expect(api.listUsers()).resolves.toEqual([db.users.projection(user)]);
  });
});

describe('getUser', () => {
  it('should resolves with user', async () => {
    await expect(api.getUser(user.id)).resolves.toEqual(db.users.projection(user));
  });

  it('should rejects with APIError(404)', async () => {
    await expect(api.getUser(12345)).rejects.toEqual(new APIError(404));
  });
});
