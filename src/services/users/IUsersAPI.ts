import { User } from '../../types';

export default interface IUsersAPI {
  listUsers(): Promise<User[]>;
  getUser(id: number): Promise<User>;
}
