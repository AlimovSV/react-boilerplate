import { User } from '../../types';
import { APIError } from '../../errors';

import API from '../API';
import IUsersAPI from './IUsersAPI';

export default class UsersAPI extends API implements IUsersAPI {
  async listUsers() {
    const response = await this.instance.get<User[]>(`/users`);

    switch (response.status) {
      case 200:
        return response.data;
      default:
        throw new APIError(response.status);
    }
  }

  async getUser(id: number) {
    const response = await this.instance.get<User>(`/users/${id}`);

    switch (response.status) {
      case 200:
        return response.data;
      default:
        throw new APIError(response.status);
    }
  }
}
