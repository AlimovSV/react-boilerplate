import LokiJS, { LokiMemoryAdapter } from 'lokijs';

import UserFixtures, { XUser } from './users';

const UsersMixin = {
  byPassword(this: Collection<XUser>, password: string) {
    return this.findOne({ password });
  },
};

type XUsers = Collection<XUser> & typeof UserFixtures & typeof UsersMixin;

class DB extends LokiJS {
  constructor() {
    super('db.json', {
      adapter: new LokiMemoryAdapter(),
    });

    Object.assign(this.addCollection<XUser>('users'), UserFixtures, UsersMixin);
  }

  get users() {
    return this.getCollection<XUser>('users') as XUsers;
  }

  clear() {
    this.users.clear();
  }
}

export const users = UserFixtures;

const db = new DB();

export default db;

/**
 * SEEDS
 */

if (process.env.NODE_ENV !== 'test') {
  db.users.insert(db.users.JohnJohnson);
}
