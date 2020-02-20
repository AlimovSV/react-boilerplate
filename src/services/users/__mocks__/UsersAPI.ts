import { APIError } from '../../../errors';

import db from '../../../fixtures';
import IUsersAPI from '../IUsersAPI';

export default class UsersAPI implements IUsersAPI {
  async listUsers() {
    return db.users.data.map(db.users.projection);
  }

  async getUser(id: number) {
    const user = db.users.findOne({ id });

    if (!user) {
      throw new APIError(404);
    }

    return db.users.projection(user);
  }
}
