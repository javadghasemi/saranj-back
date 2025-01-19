import { User } from '../../../../domain/model/user';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from '../../../../application/ports/user.repository';

export class TypeormUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepository: Repository<UserEntity>,
  ) {}

  deleteById(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  findAll(): Promise<User[]> {
    return Promise.resolve([]);
  }

  findOne(id: string): Promise<User> {
    return Promise.resolve(undefined);
  }

  insert(user: User): Promise<User> {
    return Promise.resolve(undefined);
  }

  update(user: User): Promise<User> {
    return Promise.resolve(undefined);
  }
}
