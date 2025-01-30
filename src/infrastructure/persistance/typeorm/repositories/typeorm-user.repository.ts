import { User } from '../../../../domain/model/user';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from '../../../../application/ports/user.repository';
import { UserMapper } from '../mappers/user.mapper';

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

  async findOneByEmail(email: string): Promise<User> {
    const userEntity = await this.userEntityRepository.findOneBy({ email });
    return UserMapper.toDomain(userEntity);
  }

  async insert(user: User): Promise<User> {
    const userEntity = UserMapper.toEntity(user);
    const result = await this.userEntityRepository.insert(userEntity);
    return UserMapper.toDomain(result.generatedMaps[0] as UserEntity);
  }

  update(user: User): Promise<User> {
    return Promise.resolve(undefined);
  }

  async checkEmailExists(email: string): Promise<boolean> {
    return this.userEntityRepository.existsBy({ email });
  }

  checkMobileNumberExists(mobileNumber: string): Promise<boolean> {
    return this.userEntityRepository.existsBy({ mobileNumber });
  }
}
