import faker from 'faker';
import { User } from '../types';

export interface XUser extends User {
  password: string;
}

const JohnJohnson: XUser = {
  id: 1,
  name: 'John Johnson',
  password: '12qwASzx',
};

export default {
  JohnJohnson,

  projection: (user: XUser): User => ({
    id: user.id,
    name: user.name,
  }),

  random: (attributes: Partial<XUser> = {}): XUser => ({
    id: faker.random.number(),
    name: faker.name.findName(),
    password: faker.internet.password(),
    ...attributes,
  }),
};
