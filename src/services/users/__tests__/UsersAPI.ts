import { AxiosRequestConfig } from 'axios';
import { APIError } from '../../../errors';
import { users } from '../../../fixtures';

/**
 * Under test
 */
const { default: UsersAPI } = require('../UsersAPI');

const baseURL = 'https://localhost:4000/api';
const adapter = jest.fn();
const api = new UsersAPI(baseURL, { adapter });

beforeEach(() => {
  adapter.mockClear();
});

const user = users.projection(users.JohnJohnson);

describe('listUsers', () => {
  it('should resolves with users', async () => {
    const data = [user];

    adapter.mockImplementationOnce((config: AxiosRequestConfig) => {
      expect(config).toMatchObject({
        baseURL,
        method: 'get',
        url: '/users',
      });

      return Promise.resolve({
        data,
        status: 200,
      });
    });

    await expect(api.listUsers()).resolves.toBe(data);
  });

  it('should rejects with APIError(500)', async () => {
    const status = 500;

    adapter.mockRejectedValueOnce({
      status,
    });

    await expect(api.listUsers()).rejects.toEqual(new APIError(status));
  });
});

describe('getUser', () => {
  it('should resolves with user', async () => {
    adapter.mockImplementationOnce((config: AxiosRequestConfig) => {
      expect(config).toMatchObject({
        baseURL,
        method: 'get',
        url: `/users/${user.id}`,
      });

      return Promise.resolve({
        data: user,
        status: 200,
      });
    });

    await expect(api.getUser(user.id)).resolves.toBe(user);
  });

  it('should rejects with APIError(404)', async () => {
    const status = 404;

    adapter.mockRejectedValueOnce({
      status,
    });

    await expect(api.getUser(user.id)).rejects.toEqual(new APIError(status));
  });
});
