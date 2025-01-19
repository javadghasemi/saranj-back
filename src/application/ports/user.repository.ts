import { User } from '../../domain/model/user';

export abstract class UserRepository {
  abstract insert(user: User): Promise<User>;
  abstract deleteById(id: string): Promise<void>;
  abstract findAll(): Promise<User[]>;
  abstract findOne(id: string): Promise<User>;
  abstract update(user: User): Promise<User>;
}
